<?php

namespace App\Http\Controllers\Report;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Carbon\Carbon;
class ManpowerReportController extends Controller
{
    public function mp_report_filter(Request $request){
       
        $start_date = Carbon::parse($request->mp_date)
                                 ->toDateTimeString();
    
        $end_date = Carbon::parse($request->mp_end_date)
                                 ->toDateTimeString();
        $withstm = 'Yes';                         
           
            $data = DB::table('man_powers')
                        ->leftJoin('man_power_passports','man_power_passports.man_power_id', 'man_powers.id')
                        ->join('passengers','passengers.id','man_power_passports.passenger_id')
                        ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
                        ->leftJoin('sectors', 'sectors.id', 'passengers.passenger_sector_id')
                        ->join('interviews','interviews.passenger_id','man_power_passports.passenger_id')
                        ->join('requisition_trade_infos', 'requisition_trade_infos.id', 'passengers.passenger_trade_id')
                        ->join('requisition_visainfos', 'requisition_visainfos.visa_no', 'requisition_trade_infos.trade_visa_no')
                       
                        ->leftJoin('stm_passports', 'stm_passports.passenger_id', 'passengers.id');
    
                        
                        if($request->mp_status == '0'){
                            
                            $data->where('man_power_passports.man_power_passport_status',  0);
                        }
    
                        if($request->mp_status == '1'){
                            
                            $data->where('man_power_passports.man_power_passport_status',  1);
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
    
                        if($request->mp_date){
                            $data->whereBetween('man_powers.man_power_date', [ $start_date, $end_date]);
                        }

                        if($withstm){
                            $data->where('stm_passports.stm_passport_status',  1);
                        }
    
    
                        $collection = $data->get();
    
    
            return response()->json([
                'passenger' => $collection,                 
            ], 200);
        }
}
