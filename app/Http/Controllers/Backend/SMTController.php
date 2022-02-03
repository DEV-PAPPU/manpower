<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Requisition;
use App\Models\MofaInformation;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use App\Models\Passenger;
use App\Models\Stm;
use App\Models\StmPassport;
use App\Models\Interview;
use DB;
class SMTController extends Controller
{
    public function index(){
        $data = Stm::with('stmpassport')->latest()->get();
        return response()->json($data, 200);
    }

    public function stm_passports($id){
        $data = StmPassport::with('passenger')->where('stm_id', $id)->latest()->get();
        return response()->json($data, 200);
    }

    public function search_passport(Request $request){
        
        $data = '';
        $msg = '';
        $msg_status = '';
        $error_msg = '';
        $passenger_interview = '';

        $passenger = Passenger::where('passport_no',  $request->passport_no)->first();

        $old_passport = StmPassport::where('stm_passport_no',  $request->passport_no)->first();


        if($old_passport){
            $error_msg =   'Passenger Already Added STM';
        }
        
        //checking passenger interview done or not
        if($passenger){
            
            $passenger_interview = Interview::where('passenger_id',$passenger->id)->first();

            //checking interview data
            if($passenger_interview){
                
                if($passenger_interview->pc_date == null && $passenger_interview->medical_result == '0'){
                   
                    $error_msg = 'Please Complate Passenger Interview';
                }
            }

        }

        else {
            $error_msg = 'Passenger Not Found!';
        }




        if($passenger){

            if($passenger->passport_source == 'agent'){
                $passenger = Passenger::with('agent')->where('passport_no',  $request->passport_no)->first();
            }
    
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
            else {
                $error_msg = 'Please entry in Mofa-List';
            }
        }



        return response()->json([
            'data' => $data,
            'msg' => $msg,
            'error_msg' => $error_msg,
            'msg_status' => $msg_status,

        ], 200,);
    }

    public function store(Request $request){
         
        // return $request->passport;

        $stm = new Stm();
        $stm->stm_date = $request->date;
        $stm->save();

        foreach( $request->passport as $item){
            $stmPassport = new StmPassport();
            $stmPassport->stm_id = $stm->id;
            $stmPassport->passenger_id = $item['passenger_id'];
            $stmPassport->stm_passport_no = $item['passport_no'];
            $stmPassport->save();
        }

        return response()->json(['msg' => 'STM Added Sucess'], 200);

    }


    public function change_passport_status(Request $request){
           
             
            // checking for change status of stm table. if all passport staus Complate then stm table status will change to Complate
             $stm_total_passports = $request->total_passport;

             //getting Complate passports 
             $passports =  StmPassport::where('stm_passport_status', '1')->get();
             $total_passport = $passports->count();

             if($total_passport == $stm_total_passports){
                $stm =  Stm::findOrfail($request->stm_id);
                $stm->stm_status = '1';
                $stm->save();
                 
             }
            
            // change single passport status
            $passport =  StmPassport::findOrfail($request->stm_passport_id);
            $passport->stm_passport_status = 1;
            $passport->stm_passport_complete_date = $request->date;
            $passport->save();

            return response()->json(['msg' => 'Passport Status Changed'], 200);

    }
}
