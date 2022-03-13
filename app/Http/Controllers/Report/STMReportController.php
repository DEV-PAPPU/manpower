<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Requisition;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use App\Models\Passenger;
use App\Models\Stm;
use App\Models\StmPassport;
use App\Models\Interview;
use Carbon\Carbon;
use DB;
class STMReportController extends Controller
{

    public function stm_report_filter(Request $request){
       
    $start_date = Carbon::parse($request->stm_date)
                             ->toDateTimeString();

    $end_date = Carbon::parse($request->stm_end_date)
                             ->toDateTimeString();
       
        $data = DB::table('stms')
                    ->leftJoin('stm_passports','stm_passports.stm_id', 'stms.id')
                    ->leftJoin('passengers','passengers.id','stm_passports.passenger_id')
                    ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
                    ->leftJoin('sectors', 'sectors.id', 'passengers.passenger_sector_id')
                    ->join('interviews','interviews.passenger_id','stm_passports.passenger_id')
                    ->join('requisition_trade_infos', 'requisition_trade_infos.id', 'passengers.passenger_trade_id')
                    ->join('requisition_visainfos', 'requisition_visainfos.visa_no', 'requisition_trade_infos.trade_visa_no');

                    
                    if($request->stm_status == '0'){
                        
                        $data->where('stm_passports.stm_passport_status',  0);
                    }

                    if($request->stm_status == '1'){
                        
                        $data->where('stm_passports.stm_passport_status',  1);
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


                    // interview filter
                    // if($request->medical){
                    //     $data->where('interviews.medical_result', $request->medical);
                    // }

                    // if($request->medical == '0'){
                    //     $data->whereNotNull('interviews.medical_gone_date');
                    // }
                    

                    //  if($request->t_c == '0'){
                    //     //  return $request->t_c;
                    //     $data->whereNull('interviews.tc_rcv_date');
                    //  }

                    //  if($request->t_c == '1'){
                    //     $data->whereNotNull('interviews.tc_rcv_date');
    
                    //  }

                    // if($request->p_c){
                        
                    //     if($request->p_c == '1'){
                    //         $data->whereNotNull('interviews.pc_date');

                    //     }
                    //     elseif($request->p_c == '0'){
                    //        $data->whereNull('interviews.pc_date');
                    //     }
                    // }
                    
                    // if($request->t_c){

                    //     if($request->t_c == '1'){
                    //         $data->whereNotNull('interviews.tc_rcv_date');

                    //     }
                    //     elseif($request->t_c == '0'){
                    //        $data->whereNull('interviews.tc_rcv_date');
                    //     }
                    // }



                    if($request->sector_id){
                        $data->where('sectors.id', $request->sector_id) ;
                    }

                    if($request->stm_date){
                        $data->whereBetween('stms.stm_date', [ $start_date, $end_date]);
                    }


                    $collection = $data->get();


        return response()->json([
            'passenger' => $collection,
            // 'error_msg' => 'no'
             
        ], 200);
    }

    public function company_by_visa_no(Request $request){


        $error_msg = '';
        $company = '';
        $sector = '';
        
        $visa_info =  DB::table('requisition_visainfos')->where('visa_no', $request->visa_no)->first();
      
        if($visa_info){
           
            $requisition  = DB::table('requisitions')->where('id', $visa_info->requisition_id)->first();

          
             $sector  =  DB::table('requisition_sectors')
                                     ->where('requisition_id', $requisition->id)
                                     ->join('sectors','sectors.id','requisition_sectors.requisition_sector_id')
                                     ->select('sectors.id','sectors.sector_name')
                                     ->get();
           
                                     
            $company  = DB::table('companies')->where('id', $requisition->company_id)->first();

        }
        else{
            $error_msg = 'Visa Not Found !';
        }

       

        return response()->json([
            'company' => $company,
            'sector' => $sector,
            'error_msg' => $error_msg
             
        ], 200);
       
    
    }


}
