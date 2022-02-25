<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Requisition;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use App\Models\Passenger;
use App\Models\Stm;
use App\Models\StmPassport;
use App\Models\Interview;
use App\Models\ManPowerPassport;
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

    public function edit($id){
       
        $data = DB::table('stm_passports')
                    ->leftJoin('stms','stms.id','stm_passports.stm_id')
                    ->leftJoin('passengers','passengers.id','stm_passports.passenger_id')
                    ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
                   
                    ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.id', 
                              'passengers.passenger_trade_id')

                    ->select('stm_passports.id','passengers.passenger_name','passengers.passport_no',
                             'passengers.passport_source',
                             'companies.company_name', 'requisition_trade_infos.trade', 'stms.stm_date'
                            )
                     ->where('stms.id', $id)    
                    ->get();


         $stm_date = DB::table('stms')
                        ->select('stms.stm_date')
                        ->where('stms.id', $id)    
                        ->first();           

        return response()->json([
            'passenger' => $data,
            'stm_date' => $stm_date
             
        ], 200);
    }

    
    public function search_passport(Request $request){
        
        $data = '';
        $msg = '';
        $msg_status = '';
        $error_msg = '';
        $passenger_interview = '';

        $passenger = Passenger::where('passport_no',  $request->passport_no)->first();

        if($passenger){
          
            $old_passport = StmPassport::where('passenger_id',  $passenger->id)->first();
            
            if($old_passport){
                $error_msg =   'Passenger Already Added STM';
            }
        }
        else {
            $error_msg = 'Passenger Not Found!';
        }
        
        
        //checking passenger interview done or not
        if($passenger){
            
            $passenger_interview = Interview::where('passenger_id',$passenger->id)->first();

            //checking interview data
            if($passenger_interview){
                
                if($passenger_interview->pc_date == null && $passenger_interview->medical_result == '0'){
                   
                    $error_msg = 'Please Complate Passenger Interview';
                }

                elseif ($passenger_interview->pc_date == null) {
                    $error_msg = 'Please Complate Passenger PC Date';
                }

                elseif ($passenger_interview->medical_result == '0') {
                    $error_msg = 'Please Complate Passenger Medical';
                }
            }

            else {
                $error_msg = 'Please Complate Passenger Interview';
            }

        }
        else {
            $error_msg = 'Passenger Not Found!';
        }


        if($passenger){

            if($passenger->passport_source == 'agent'){

                $data = DB::table('passengers')
                    ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
                    ->leftJoin('agents', 'agents.id', 'passengers.agent_id')
                   
                    ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.id', 
                              'passengers.passenger_trade_id')

                    ->select('passengers.id','passengers.passenger_name','passengers.passport_no',
                             'passengers.passport_source', 'agents.agent_name',
                             'companies.company_name', 'requisition_trade_infos.trade',
                            )
                     ->where('passengers.id', $passenger->id)    
                    ->get();
            }

            else{

                $data = DB::table('passengers')
                ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
                ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.id', 'passengers.passenger_trade_id')
                ->select('passengers.id','passengers.passenger_name','passengers.passport_no',
                         'passengers.passport_source','companies.company_name', 'requisition_trade_infos.trade',
                        )
                ->where('passengers.id', $passenger->id)   
                ->get();

            }
            
        }


        // Getting object from data array
        if($data){

            foreach ($data as $item) {
                $data = $item;
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
            $stmPassport->passenger_id = $item['id'];
            $stmPassport->save();
        }

        return response()->json(['msg' => 'STM Added Sucess'], 200);

    }





    // public function update(Request $request, $id){

    //     $stm = new Stm::findOrfail($id);
    //     $stm->stm_date = $request->date;
    //     $stm->save();

    //     foreach( $request->passport as $item){
    //         $stmPassport = new StmPassport();
    //         $stmPassport->stm_id = $stm->id;
    //         $stmPassport->passenger_id = $item['id'];
    //         $stmPassport->save();
    //     }

    //     return response()->json(['msg' => 'STM Updated Sucess'], 200);

    // }


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


    public function stm_delete($id){

        $msg = '';
        $error_msg = '';

        $stm =  Stm::where('id', $id)->first();

        $passport = '';
        $mppassport = '';

        if($stm){

            $passport =  StmPassport::where('stm_id', $stm->id)->first();
            
            if($passport){

                $mppassport =  ManPowerPassport::where('passenger_id', $passport->passenger_id)->first();
               
                if($mppassport){
                    $error_msg = 'Please delete from Man-Power  first';
                }
                else{
                    $stm->delete();
                    $msg = 'Delete Success';
                }
            }
            else{
                $stm->delete();
                $msg = 'Delete Success';
            }
        }

        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,

        ], 200,);

        
    }


    public function stm_passenger_delete($id){

        $msg = '';
        $error_msg = '';

        $passport =  StmPassport::where('id', $id)->first();

        $mppassport =  ManPowerPassport::where('passenger_id', $passport->passenger_id)->first();

        if($mppassport){
            $error_msg = 'Please delete from Man-Power  first';
        }else{
            $passport->delete();
            $msg = 'Delete Success';
        }

        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,

        ], 200,);

        
    }


    
    public function stm_processing_date($id){
        
        $data = DB::table('stms')
                ->where('stms.id', $id)    
                ->select('stms.stm_date')
                ->first();  

        return response()->json([
            'date' => $data->stm_date,
            'label' => 'STM Processing Date',
        ], 200,);
    }
}
