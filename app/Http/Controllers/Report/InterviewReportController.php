<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Passenger;

use Carbon\Carbon;
class InterviewReportController extends Controller
{


      public function interview_report_filter (Request $request){

       
        $start_date = Carbon::parse($request->start_date)
                                 ->toDateTimeString();
    
        $end_date = Carbon::parse($request->end_date)
                                 ->toDateTimeString();
           
            $data = DB::table('interviews')
                        ->leftJoin('passengers','passengers.id','interviews.passenger_id')
                        
                        ->join('sectors', 'sectors.id', 'passengers.passenger_sector_id')

                        ->join('stm_passports','stm_passports.passenger_id','passengers.id')
                        ->join('companies', 'companies.id', 'passengers.passenger_company_id')
                        ->join('requisition_trade_infos', 'requisition_trade_infos.id', 'passengers.passenger_trade_id')
                        ->join('requisition_visainfos', 'requisition_visainfos.visa_no', 'requisition_trade_infos.trade_visa_no');
    
                        
                        if($request->stm_status == '0'){
                            
                            $data->where('stm_passports.stm_passport_status',  0);
                        }
    
                        if($request->stm_status == '1'){
                            
                            $data->where('stm_passports.stm_passport_status',  1);
                        }

                        if($request->sector_id){
                            $data->where('sectors.id', $request->sector_id) ;
                        }
    
    
                        if($request->visa_no){
    
                            $data->where('requisition_visainfos.visa_no', $request->visa_no);
                        }
    
                        if($request->company_id){
    
                            $data->where('companies.id', $request->company_id);
                        }
    
    
                        if($request->trade){
                            $data->where('requisition_trade_infos.trade', $request->trade);
                        }

                        if($request->start_date){
                            $data->whereBetween('interviews.created_at', [ $start_date, $end_date]);
                        }
    
    
                        if($request->medical == 1){
                            $data->where('interviews.medical_result', 1);
                        }

                        if($request->medical == 2){
                             $data->where('interviews.medical_result', 2);
                        }
    
                        if($request->medical == '0'){
                            $data->where('interviews.medical_result', 0);
                        }
                        
    
                         if($request->t_c == '0'){
                            $data->where('interviews.tc_rcv_status' , 0);
                         }
    
                         if($request->t_c == '1'){
                            $data->where('interviews.tc_rcv_status', 1);
        
                         }

                         
                         if($request->p_c == '0'){
                            $data->where('interviews.pc_status' , 0);
                         }
    
                         if($request->p_c == '1'){
                            $data->where('interviews.pc_status', 1);
        
                         }
    
    
                        $collection = $data->get();
    
    
            return response()->json([
                'passenger' => $collection,
                // 'error_msg' => 'no'
                 
            ], 200);
        }
}
