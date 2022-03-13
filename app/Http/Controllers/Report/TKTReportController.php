<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Carbon\Carbon;
class TKTReportController extends Controller
{
    public function tkt_report_filter(Request $request){
       
        $start_date = Carbon::parse($request->tkt_date)
                                 ->toDateTimeString();
    
        $end_date = Carbon::parse($request->tkt_end_date)
                                 ->toDateTimeString();

        $withstmTkt = 'Yes';                            
           
            $data = DB::table('tkts')
                        ->leftJoin('tkt_passports','tkt_passports.tkt_id', 'tkts.id')
                        ->leftJoin('passengers','passengers.id','tkt_passports.passenger_id')
                        ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
                        ->leftJoin('sectors', 'sectors.id', 'passengers.passenger_sector_id')
                        ->join('interviews','interviews.passenger_id','tkt_passports.passenger_id')
                        ->join('requisition_trade_infos', 'requisition_trade_infos.id', 'passengers.passenger_trade_id')
                        ->join('requisition_visainfos', 'requisition_visainfos.visa_no', 'requisition_trade_infos.trade_visa_no')

                        ->leftJoin('stm_passports', 'stm_passports.passenger_id', 'passengers.id')
                        ->leftJoin('man_power_passports', 'man_power_passports.passenger_id', 'passengers.id');

    
                        
                        if($request->tkt_status == '0'){
                            
                            $data->where('tkt_passports.tkt_passport_status',  0);
                        }
    
                        if($request->tkt_status == '1'){
                            
                            $data->where('tkt_passports.tkt_passport_status',  1);
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
    

    
                        if($request->sector_id){
                            $data->where('sectors.id', $request->sector_id) ;
                        }
    
                        if($request->tkt_date){
                            $data->whereBetween('tkts.tkt_date', [ $start_date, $end_date]);
                        }

                        if($withstmTkt){
                            $data->where('stm_passports.stm_passport_status',  1);
                            $data->where('man_power_passports.man_power_passport_status',  1);
                        }
    
    
                        $collection = $data->get();
    
    
            return response()->json([
                'passenger' => $collection,                 
            ], 200);
        }
}
