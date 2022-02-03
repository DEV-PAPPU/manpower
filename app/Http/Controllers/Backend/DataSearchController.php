<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Passenger;
use App\Models\PassportStatusManagement;
use App\Models\Requisition;
use App\Models\RequisitionTradeInfo;
use App\Models\RequisitionCompanySector;
use DB;
class DataSearchController extends Controller
{

    public function search_passenger(Request $request){

        $error_msg = '';

        $passenger = Passenger::where('passport_no', $request->passport_no)->first();
        
        if(!$passenger){
            $error_msg = 'Passenger not found!';
        }
        
        if($passenger){

            $is_passenger_added = PassportStatusManagement::where('passenger_id', $passenger->id)->first();

            if($is_passenger_added){
                $error_msg = 'Passenger Already Added!';
            }

        }

        return response()->json([
            'error_msg' => $error_msg,
            'passenger' => $passenger,
        ], 200);

    }

    
    public function search_trade_by_company(Request $request){
               
        $msg = '';
        $trade = '';
        $companysectors = '';
        
        $requisition = Requisition::where('company_id', $request->company_id)->first();

        // checking and getting  Requisition data by company id
        if($requisition){

            $trade = RequisitionTradeInfo::where('requisition_id', $requisition->id)
                    ->where([['available', '>', 0]])
                    ->get();
            
            // checking and getting  Requisition Company Sectors
            $companysectors = RequisitionCompanySector::with('sector')->where('requisition_company_id', $request->company_id)->first();
            if($companysectors){
             $companysectors = RequisitionCompanySector::with('sector')->where('requisition_company_id', $request->company_id)->get();
            }
            else{
                $msg = 'Sector not found in this company';
            }

        }
        else{
            $msg = 'There is no trade in this company';
        }

        return response()->json([
            'msg' => $msg,
            'trade' => $trade,
            'companysectors' => $companysectors,
        ], 200);
    }
}
