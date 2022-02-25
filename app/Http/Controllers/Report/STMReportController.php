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
                    ->join('requisition_visainfos', 'requisition_visainfos.visa_no', 'requisition_trade_infos.trade_visa_no')

                     ->whereBetween('stms.stm_date', [ $start_date, $end_date])

                     ->where('sectors.id', $request->sector_id)    
                     ->where('stm_passports.stm_passport_status', $request->stm_status)    
                     ->where('requisition_trade_infos.trade', $request->trade)

                     ->where('interviews.medical_result', $request->medical)  

                    ->get();


        return response()->json([
            'passenger' => $data,
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
