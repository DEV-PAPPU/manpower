<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Passenger;
use App\Models\PassportStatusManagement;
use App\Models\Requisition;
use App\Models\RequisitionTradeInfo;
use App\Models\Country;
use App\Models\RequisitionSector;
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


    public function search_sector_by_company_id($id)
    {

        $data = DB::table('companies')
                    ->leftJoin('countries', 'countries.id', 'companies.country_id')
                    ->join('country_sectors', 'country_sectors.country_id', '=', 'countries.id')
                    ->join('sectors', 'sectors.id', '=', 'country_sectors.country_sector_id')
                    ->where('companies.id', $id)
                    ->select('sectors.id', 'sectors.sector_name')
                    ->get();

        $msg = '';

        if(!$data){
            $msg = 'Sector Not Found!';
            
        }
          return response()->json([
            'data' => $data,
            'msg' => $msg,
        ], 200);
           

    }

    
    public function search_sector_trade_by_company_id($id){

        $msg = '';
        $trade = '';
        $sectors = '';
        
        $requisition = Requisition::where('company_id', $id)->first();


        // checking and getting  Requisition data by company id
        if($requisition){


            $trade = DB::table('requisitions')
                    ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.requisition_id', 'requisitions.id')
                    ->where('requisitions.company_id', $id)
                    ->where([['requisition_trade_infos.available', '>', 0]])
                    ->select('requisition_trade_infos.id', 'requisition_trade_infos.trade', 
                             'requisition_trade_infos.price_reference', 'requisition_trade_infos.trade_visa_no',
                             'requisition_trade_infos.salary')
                    ->get();

            // $trade = RequisitionTradeInfo::where('requisition_id', $requisition->id)
            //         ->where([['available', '>', 0]])
            //         // ->select('id','trade')
            //         ->get();
            

            // checking and getting  Requisition Company -> country -> Sectors
            $sectors = DB::table('requisition_sectors')
                    ->leftJoin('sectors', 'sectors.id', 'requisition_sectors.requisition_sector_id')
                    ->where('requisition_sectors.requisition_id', $requisition->id)
                    ->select('sectors.id', 'sectors.sector_name')
                    ->get();
          
            if(!$sectors){
                $msg = 'Sector not found in this company';
            }
 

        }
        else{
            $msg = 'There is no trade in this company';
        }

        return response()->json([
            'msg' => $msg,
            'trade' => $trade,
            'sectors' => $sectors,
        ], 200);
    }
}
