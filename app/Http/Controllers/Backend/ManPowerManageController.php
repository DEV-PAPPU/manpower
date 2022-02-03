<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Requisition;
use App\Models\MofaInformation;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use App\Models\Passenger;
use App\Models\ManPower;
use App\Models\ManPowerPassport;
use App\Models\Interview;
use App\Models\StmPassport;
use DB;
class ManPowerManageController extends Controller
{
    public function index(){
        $data = ManPower::with('mppassport')->latest()->get();
        return response()->json($data, 200);
    }

    public function manpower_passports($id){
        $data = ManPowerPassport::with('passenger')->where('man_power_id', $id)->latest()->get();
        return response()->json($data, 200);
    }

    public function search_passport(Request $request){
        
        $data = '';
        $msg = '';
        $msg_status = '';
        $error_msg = '';
        $passenger_interview = '';

        $passenger = Passenger::where('passport_no',  $request->passport_no)->first();

        $old_passport = ManPowerPassport::where('man_power_passport_no',  $request->passport_no)->first();

        $is_stm_done = StmPassport::where('stm_passport_no',  $request->passport_no)->first();


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




        if($old_passport){
            $error_msg =   'Passenger Already';
        }

        if($is_stm_done){
           
            if($is_stm_done->stm_passport_complete_date == null){
                $error_msg =   'Please Complate STM';
            }
        }
        

        if($old_passport){
            $error_msg = 'Already added in Man Power list';
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
         

        $manpower = new ManPower();
        $manpower->man_power_date = $request->date;
        $manpower->save();

        foreach( $request->passport as $item){
            $passport = new ManPowerPassport();
            $passport->man_power_id = $manpower->id;
            $passport->passenger_id = $item['passenger_id'];
            $passport->man_power_passport_no = $item['passport_no'];
            $passport->save();
        }

        return response()->json(['msg' => 'MP Added Sucess'], 200);

    }


    public function change_passport_status(Request $request){
           
            // checking for change status of manpower table. if all passport staus Complate then manpower table status will change to Complate
             $manpower_total_passports = $request->total_passport;

             //getting Complate passports 
             $passports =  ManPowerPassport::where('man_power_passport_status', '1')->get();
             $total_passport = $passports->count();

             if($total_passport == $manpower_total_passports){
                $manpower =  ManPower::findOrfail($request->manpower_id);
                $manpower->man_power_status = '1';
                $manpower->save();
                 
             }

            
            // change single passport status
            $passport =  ManPowerPassport::findOrfail($request->manpower_passport_id);
            $passport->man_power_passport_status = 1;
            $passport->man_power_passport_complete_date = $request->date;
            $passport->save();

            return response()->json(['msg' => 'Passport Status Changed'], 200);

    }



    
}
