<?php

namespace App\Http\Controllers\Backend;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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

        
       
        $passenger = Passenger::where('passport_no',  $request->passport_no)->first();


        //checking passenger interview done or not
        if($passenger){
            
            $passenger_interview = Interview::where('passenger_id',$passenger->id)->first();

            //checking interview data
            if($passenger_interview){
                
                if($passenger_interview->pc_date == null && $passenger_interview->medical_result == '0'){
                   
                    $error_msg = 'Please Complate Passenger Interview';
                }

                elseif ($passenger_interview->pc_date == null) {
                    $error_msg = 'Please Complate Passenger Pc Date';
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

        // if($passenger){

        //     $old_passport = TktPassport::where('passenger_id',  $passenger->id)->first();

        //     if($old_passport){

        //         $error_msg =   'Already added in TKT list';
        //     }           
        // }



        // checking passenger STM & MP data
        if($passenger){

            $is_stm_done = StmPassport::where('passenger_id', $passenger->id)->first();

            $is_manpower_done = ManPowerPassport::where('passenger_id', $passenger->id)->first();

            if($is_manpower_done){

                if($is_manpower_done->man_power_passport_status == '0'){
                    $error_msg = 'Please Complate Man Power';
                }
                
            }
            else{
                $error_msg = 'Please Complate Man Power';
            }
            

            if($is_stm_done){
                
                 if($is_stm_done->stm_passport_status == '0'){
                    $error_msg = 'Please Complate  STM';
                }

            }else{
                $error_msg = 'Please Complate  STM';
            }            
            
        }

        
        // data collection
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
        ], 200,);
    }

    public function store(Request $request){
         

        $tkt = new Tkt();
        $tkt->tkt_date = $request->date;
        $tkt->save();

        foreach( $request->passport as $item){
            $passport = new TktPassport();
            $passport->tkt_id = $tkt->id;
            $passport->passenger_id = $item['id'];
            $passport->save();
        }

        return response()->json(['msg' => 'TKT Added Sucess'], 200);

    }


    public function edit($id){
       
        $data = DB::table('tkt_passports')
                    ->leftJoin('tkts','tkts.id','tkt_passports.tkt_id')
                    ->leftJoin('passengers','passengers.id','tkt_passports.passenger_id')
                    ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
                   
                    ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.id', 
                              'passengers.passenger_trade_id')

                    ->select('tkt_passports.id','passengers.passenger_name','passengers.passport_no',
                             'passengers.passport_source',
                             'companies.company_name', 'requisition_trade_infos.trade','tkts.tkt_date',
                            )
                     ->where('tkts.id', $id)    
                    ->get();


         $stm_date = DB::table('tkts')
                        ->select('tkts.tkt_date')
                        ->where('tkts.id', $id)    
                        ->first();           

        return response()->json([
            'passenger' => $data,
            'tkt_date' => $stm_date
             
        ], 200);
    }


    public function change_passport_status(Request $request){
           
            // checking for change status of Tkt table. if all passport staus Complate then Tkt table status will change to Complate

            $total_passports = DB::table('tkt_passports')
                            ->where('tkt_id', $request->tkt_id)    
                            ->get();

             $total_passport_of_tkt = $total_passports->count();


            $total_complete_passports = DB::table('tkt_passports')
                            ->where('tkt_passport_status', 1)
                            ->where('tkt_id', $request->tkt_id)    
                            ->get();

                            
             $total_passport_complete = $total_complete_passports->count();

             if($total_passport_of_tkt == $total_passport_complete){
                
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


    public function tkt_delete($id){

        $msg = '';
        $error_msg = '';

        $tkt =  Tkt::where('id', $id)->first();

        $tktpassport =  TktPassport::where('tkt_id', $id)->first();

        $passenger = Passenger::where('id', $tktpassport->passenger_id)->first();

        if($passenger->passenger_fly == '1'){
            $error_msg = 'Some passenger has flyed in this list can`t delete';
        } 
        else{
            $tkt->delete();
            $msg = 'Delete Success';
        }
    
        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,

        ], 200,);
        
    }


    public function tkt_passenger_delete($id){

        $msg = '';
        $error_msg = '';

        $tktpassport =  TktPassport::where('id', $id)->first();

        $passenger =  Passenger::where('id', $tktpassport->passenger_id)->first();

        if($passenger->passenger_fly == '1'){
            $error_msg = 'Passenger has flyed so can`t delete';
        }
        else{
            $tktpassport->delete();
            $msg = 'Delete Success';
        }


        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,

        ], 200,);

    }


    public function tkt_processing_date($id){
        
        $data = DB::table('tkts')
                ->where('tkts.id', $id)    
                ->select('tkts.id','tkts.tkt_date')
                ->first();  

        return response()->json([
            'date' => $data->tkt_date,
            'label' => 'TKT Processing Date',
        ], 200,);
    }



}
