<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Interview;
use App\Models\Passenger;
use DB;
class InterviewController extends Controller
{
    public function index(){


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
        // $interview->interview_status = $request->interview_status;
        $interview->save();

        return response()->json([
            'msg' => 'Interview done',
        ], 200);

    }


    public function update(Request $request){

        $interview = Interview::findOrfail($request->id);
        $interview->video_passenger = $request->video_passenger;
        $interview->medical_result = $request->medical_result;
        $interview->medical_gone_date = $request->medical_gone_date;
        $interview->pc_date = $request->pc_date;
        $interview->tc_rcv_date = $request->tc_rcv_date;
        $interview->passenger_fly = $request->passenger_fly;
        
        if($request->medical_result == '1'){
            $interview->medical_gone_date = '';
        }
        else{

            $interview->medical_gone_date = $request->medical_gone_date;

        }

        if($request->tc_rcv_date){
            $interview->tc_rcv_status = 1;
        }
        else{
            $interview->tc_rcv_status = 0;
        }

        if($request->pc_date){
            $interview->pc_status = 1;
        }
        else{
            $interview->pc_status = 0;
        }
        
        $interview->save();

        return response()->json([
            'msg' => 'Interview Updated',
        ], 200);
        
    }



    public function search_passenger(Request $request){

        $error_msg = '';
        $passenger_data = '';

        $passenger = Passenger::where('passport_no', $request->passport_no)->first();
        
        if($passenger){

            $passenger_data = Passenger::where('passport_no', $request->passport_no)->first();

            $old_passenger_data = Interview::where('passenger_id',$passenger->id)->first();
           
            if($old_passenger_data){
 
                $error_msg = 'Already Interview Done';
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
