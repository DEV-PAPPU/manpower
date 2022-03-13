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
use App\Models\TktPassport;
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

        //     $old_passport = ManPowerPassport::where('passenger_id',  $passenger->id)->first();

        //     if($old_passport){

        //         $error_msg =   'Already added in Man Power list';
        //     }           
        // }


        // checking passenger STM data
        if($passenger){
           
            $is_stm_done = StmPassport::where('passenger_id',  $passenger->id)->first();
            
            if($is_stm_done){
                
                if($is_stm_done->stm_passport_status == '0'){
                    $error_msg =   'Please Complate STM';
                }
            }
            else{
                $error_msg =   'Please Complate STM';
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
         

        $manpower = new ManPower();
        $manpower->man_power_date = $request->date;
        $manpower->save();

        foreach( $request->passport as $item){
            $passport = new ManPowerPassport();
            $passport->man_power_id = $manpower->id;
            $passport->passenger_id = $item['id'];
            $passport->save();
        }

        return response()->json(['msg' => 'MP Added Sucess'], 200);

    }

    public function manpower_edit($id){
       
        $data = DB::table('man_power_passports')
        ->leftJoin('man_powers','man_powers.id','man_power_passports.man_power_id')
        ->leftJoin('passengers','passengers.id','man_power_passports.passenger_id')
        ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
       
        ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.id', 
                  'passengers.passenger_trade_id')

        ->select('man_power_passports.id','passengers.passenger_name','passengers.passport_no',
                 'passengers.passport_source',
                 'companies.company_name', 'requisition_trade_infos.trade',
                 'man_powers.man_power_date',
                )
         ->where('man_powers.id', $id)    
        ->get();


        $stm_date = DB::table('man_powers')
                    ->select('man_powers.man_power_date')
                    ->where('man_powers.id', $id)    
                    ->first();           

        return response()->json([
        'passenger' => $data,
        'man_power_date' => $stm_date
        
        ], 200);
    }


    public function change_passport_status(Request $request){
           
            // checking for change status of manpower table. if all passport staus Complate then manpower table status will change to Complate
            
              $total_passports = DB::table('man_power_passports')
                            ->where('man_power_id', $request->manpower_id)    
                            ->get();

                            
                            
             $total_complete_passports = DB::table('man_power_passports')
                                        ->where('man_power_passport_status', 1)
                                        ->where('man_power_id', $request->manpower_id)    
                                        ->get();
                            
                            
             $total_passport_of_mp = $total_passports->count();
             $total_passport_complete = $total_complete_passports->count();


             if($total_passport_of_mp == $total_passport_complete){
                $manpower =  ManPower::findOrfail($request->manpower_id);
                $manpower->man_power_status = 1;
                $manpower->save();
                 
             }

            
            // change single passport status
            $passport =  ManPowerPassport::findOrfail($request->manpower_passport_id);
            $passport->man_power_passport_status = 1;
            $passport->man_power_passport_complete_date = $request->date;
            $passport->save();

            return response()->json(['msg' => 'Passport Status Changed'], 200);

    }


    public function manpower_delete($id){

        $msg = '';
        $error_msg = '';

        $manpower =  ManPower::where('id', $id)->first();


        if($manpower){

            $passport =  ManPowerPassport::where('man_power_id', $manpower->id)->first();
            
            if($passport){

                $tktpassport =  TktPassport::where('passenger_id', $passport->passenger_id)->first();
               
                if($tktpassport){
                    $error_msg = 'Please delete from TKT list first';
                }
                else{
                    $manpower->delete();
                    $msg = 'Delete Success';
                }
            }
            else{
                $manpower->delete();
                $msg = 'Delete Success';
            }
        }


        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,

        ], 200,);

        
    }


    public function manpower_passenger_delete($id){

        $msg = '';
        $error_msg = '';

        $passport =  ManPowerPassport::where('id', $id)->first();

        $tktpassport =  TktPassport::where('passenger_id', $passport->passenger_id)->first();

        if($tktpassport){
            $error_msg = 'Please delete from TKT list  first';
        }else{
            $passport->delete();
            $msg = 'Delete Success';
        }

        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,

        ], 200,);

        
    }


    public function man_power_processing_date($id){
        
        $data = DB::table('man_powers')
                ->where('man_powers.id', $id)    
                ->select('man_powers.id','man_powers.man_power_date')
                ->first();  

        return response()->json([
            'date' => $data->man_power_date,
            'label' => 'Man Power Processing Date',
        ], 200,);
    }



    
}
