<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Interview;
use App\Models\Passenger;
use App\Models\MofaInformation;

use DB;
class InterviewController extends Controller
{
    public function index(){

        $passengers = DB::table('interviews')
                    ->leftJoin('passengers', 'passengers.id','interviews.passenger_id')
                    ->join('stm_passports', 'interviews.passenger_id', 'stm_passports.passenger_id')
                    ->join('man_power_passports', 'interviews.passenger_id', 'man_power_passports.passenger_id')
                    ->join('tkt_passports', 'interviews.passenger_id', 'tkt_passports.passenger_id')
                    ->join('mofa_information', 'interviews.passenger_id', 'mofa_information.passenger_id')
                    ->join('requisition_trade_infos', 'mofa_information.trade_id', 'requisition_trade_infos.id')
                    ->join('requisitions', 'requisition_trade_infos.requisition_id', 'requisitions.id')
                    ->join('companies', 'requisitions.company_id', 'companies.id')
                    ->join('sectors', 'requisitions.sector_id', 'sectors.id')
                    ->join('agents', 'passengers.agent_id', 'agents.id')
                    // ->where('interviews.id', )
                    // Select data
                    ->select('interviews.*', 'interviews.id', 
                    'passengers.passenger_name', 'passengers.passport_no',
                    'stm_passports.stm_passport_status', 'stm_passports.stm_passport_complete_date',
                    'man_power_passports.man_power_passport_status', 'man_power_passports.man_power_passport_complete_date',
                    'tkt_passports.tkt_passport_status', 'tkt_passports.tkt_passport_booking_date',
                    'requisition_trade_infos.trade',
                    'companies.company_name', 'sectors.sector_name', 'agents.agent_name',
                    )
                    ->orderBy('passengers.passenger_name', 'asc')
                    ->get();     

        return response()->json($passengers, 200);

    }

    

    public function edit($id){
        $interview = Interview::findOrfail($id);
        return response()->json($interview, 200);
    }



    public function store(Request $request){
        
        $interview = new Interview();
        $interview->passenger_id = $request->passenger_id;
        $interview->video_passenger = $request->video;
        $interview->medical_result = $request->medical;
        $interview->medical_gone_date = $request->gone_date;
        $interview->pc_date = $request->pc_date;
        $interview->tc_rcv_date = $request->tc_rcv_date;
        $interview->save();

        return response()->json([
            'msg' => 'Interview done',
        ], 200);

    }


    public function update(Request $request){

        $interview = Interview::findOrfail($request->id);
        $interview->video_passenger = $request->video;
        $interview->medical_result = $request->medical;
        $interview->medical_gone_date = $request->gone_date;
        $interview->pc_date = $request->pc_date;
        $interview->tc_rcv_date = $request->tc_rcv_date;
        $interview->passenger_fly = $request->passenger_fly;
        $interview->save();
    }

    public function change_fly_status($id){
        
        $error_msg = '';
        $msg = '';
        $interview = Interview::findOrfail($id);
        // $interview->passenger_fly = 1;
        // $interview->save();
         
        if($interview){

            $interview->update([
                'passenger_fly' => 1,
                ]);
                $msg = 'Interview Status Change';
        }
        else {
            $error_msg = 'passenger not found!';
        }

        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,
        ], 200,);
        

    }

    public function search_passenger(Request $request){

        $error_msg = '';
        $passenger_data = '';

        $passenger = Passenger::where('passport_no', $request->passport_no)->first();
        
        if($passenger){
            
            $mofa_passenger = MofaInformation::where('passenger_id', $passenger->id)->first();

            if($mofa_passenger){
           
                $old_passenger_data = Interview::where('passenger_id',$passenger->id)->first();
      
                 if($old_passenger_data){
     
                     $error_msg = 'Already Interview Done';
                 }
                 else {
                    $passenger_data = Passenger::where('passport_no',$request->passport_no)->first();
                 }
             }

             else {
                $error_msg = 'Please add in mofa-list first';
            }
        } 
        else {
            $error_msg = 'Passenger Not Found !';
        }



        return response()->json([
            'passenger' => $passenger_data,
            'error_msg' => $error_msg,
        ], 200);

    }

}
