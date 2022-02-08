<?php

namespace App\Http\Controllers\Backend;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Requisition;
use App\Models\MofaInformation;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use App\Models\Passenger;
use App\Models\Tkt;
use App\Models\TktPassport;
use App\Models\ManPower;
use App\Models\ManPowerPassport;
use App\Models\Interview;
use App\Models\StmPassport;
use DB;
class TKTController extends Controller
{
    public function index(){
        $data = Tkt::with('tktpassport')->latest()->get();
        return response()->json($data, 200);
    }

    public function Tkt_passports($id){
        $data = TktPassport::with('passenger')->where('tkt_id', $id)->latest()->get();
        return response()->json($data, 200);
    }

    public function search_passport(Request $request){
        
        $data = '';
        $msg = '';
        $msg_status = '';
        $error_msg = '';
        $passenger_interview = '';

        $old_passport = TktPassport::where('tkt_passport_no',  $request->passport_no)->first();
       
        $passenger = Passenger::where('passport_no',  $request->passport_no)->first();


        $is_stm_done = StmPassport::where('stm_passport_no',  $request->passport_no)->first();

        $is_manpower_done = ManPowerPassport::where('man_power_passport_no',  $request->passport_no)->first();


        //checking passenger interview done or not
        if($passenger){
            
            $passenger_interview = Interview::where('passenger_id',$passenger->id)->first();

            //checking interview data
            if($passenger_interview){
                
                if($passenger_interview->pc_date == null && $passenger_interview->medical_result == '0'){
                   
                    $error_msg = 'Please Complate Passenger Interview';
                }

                elseif ($passenger_interview->pc_date == null) {
                    $error_msg = 'Please Complate Passenger Interview';
                }

                elseif ($passenger_interview->medical_result == '0') {
                    $error_msg = 'Please Complate Passenger Interview';
                }

            }
            else {
                $error_msg = 'Please Complate Passenger Interview';
            }

        }

        else {
            $error_msg = 'Passenger Not Found!';
        }



        if($is_stm_done){
           
            if($is_stm_done->stm_passport_complete_date == null){
                $error_msg =   'Please Complate STM';
            }
        }
        else {
            $error_msg =   'Please Complate STM';
        }

        if($is_manpower_done){
           
            if($is_manpower_done->man_power_passport_complete_date == null){
                $error_msg =   'Please Complate Manpower';
            }
        }


        if($old_passport){
            $error_msg = 'Already added in TKT list';
        }

        else{

            if($passenger){

                if($passenger->passport_source == 'agent'){
                    $passenger = Passenger::with('agent')->where('passport_no',  $request->passport_no)->first();
                }
    
            }
    
            // checking passenger of request passport_no
            if($passenger){
    
                $mofa = MofaInformation::with('trade')->where('passenger_id', $passenger->id)->first();
                
                // checking trade of passenger 
                if($mofa){
    
                    $mofa_info = MofaInformation::with('trade','passenger')->where('passenger_id', $passenger->id)->first();
                    
                    // getting company name
                     $company_info = Requisition::with('company')->where('id',$mofa_info->trade->requisition_id)->first();
                    
            
                     $agent_name = '';
                      
                     if($passenger->passport_source == 'agent'){
                         $agent_name = $passenger->agent->agent_name;
                     }
    
                    // data collection 
                    $data = array(
                        'passenger_id'  => $passenger->id,
                        'passport_no'  => $passenger->passport_no,
                        'passenger_name'  => $passenger->passenger_name,
                        'passport_source'  => $passenger->passport_source,
                        'agent_name'  => $agent_name,
                        'trade'  => $mofa_info->trade->trade,
                        'company_name'  => $company_info->company->company_name,
                    );
                    
                }
    
                else{
                    $error_msg = 'Please entry in Mofa-List';
                }
            }
    
        }


        return response()->json([
            'data' => $data,
            'msg' => $msg,
            'error_msg' => $error_msg,
        ], 200,);
    }

    public function store(Request $request){
         

        $tkt = new Tkt();
        $tkt->tkt_date = $request->date;
        $tkt->save();

        foreach( $request->passport as $item){
            $passport = new TktPassport();
            $passport->tkt_id = $tkt->id;
            $passport->passenger_id = $item['passenger_id'];
            $passport->tkt_passport_no = $item['passport_no'];
            $passport->save();
        }

        return response()->json(['msg' => 'TKT Added Sucess'], 200);

    }


    public function change_passport_status(Request $request){
           
            // checking for change status of Tkt table. if all passport staus Complate then Tkt table status will change to Complate
             $Tkt_total_passports = $request->total_passport;

             //getting Complate passports 
             $passports =  TktPassport::where('tkt_passport_status', '1')->get();
             $total_passport = $passports->count();

             if($total_passport == $Tkt_total_passports){
                $Tkt =  Tkt::findOrfail($request->tkt_id);
                $Tkt->tkt_status = '1';
                $Tkt->save();
                 
             }
            
            // change single passport status
            $passport =  TktPassport::findOrfail($request->tkt_passport_id);
            $passport->tkt_passport_status = 1;
            $passport->tkt_passport_booking_date = $request->date;
            $passport->save();

            return response()->json(['msg' => 'Passport Status Changed'], 200);

    }

}
