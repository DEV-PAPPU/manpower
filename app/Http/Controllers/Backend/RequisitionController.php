<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Requisition;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use App\Models\Company;
use App\Models\Sector;
use App\Models\CompanySector;
use App\Models\RequisitionSector;
use App\Models\Passenger;
use DB;
class RequisitionController extends Controller
{
    public function index(){
        
        $requisitions = Requisition::with('company')->latest()->get();

        // $requisitions = DB::table('requisitions')
        //             ->leftJoin('companies', 'requisitions.id', '=', 'requisitions.company_id')
        //             ->leftJoin('sectors', 'sectors.id', '=', 'requisitions.sector_id')
        //             ->select('requisitions.id', 'companies.company_name','sectors.sector_name')
        //             ->get();

        return response()->json($requisitions, 200);
    }

    public function store (Request $request){
       
        // return $request;
        $this->validate($request,[

            'kafil_id' => 'required',
            'requisition_date' => 'required',
            'company_id' => 'required',
        ]);
    
         $requisition = new Requisition();
         $requisition->kafil_id = $request->kafil_id;
         $requisition->requisition_date = $request->requisition_date;
         $requisition->company_id = $request->company_id;
         $requisition->save();


         $company_sectors = $request->sectors;

         foreach($company_sectors as $item){

            $r_c_sector = new RequisitionSector();
            $r_c_sector->requisition_id = $requisition->id;
            $r_c_sector->requisition_sector_id = $item['id'];
            $r_c_sector->save();

         }


         $visainfos = $request->visaFormdata;

         foreach($visainfos as $item){
            $visainfo = new RequisitionVisainfo();
            $visainfo->requisition_id = $requisition->id;
            $visainfo->visa_no = $item['visa_no'];
            $visainfo->qty = $item['visa_qty'];
            $visainfo->booked = 0;
            $visainfo->save();
         }


         $tradedata = $request->tradeFormdata;

         foreach($tradedata as $item){
            $trade = new RequisitionTradeInfo();
            $trade->requisition_id = $requisition->id;
            $trade->trade_visa_no = $item['trade_visa_no'];
            $trade->trade_qty = $item['trade_qty'];
            $trade->available = $item['trade_qty'];
            $trade->trade = $item['trade'];
            $trade->salary = $item['salary'];
            $trade->price_reference = $item['price_reference'];
            $trade->save();
         }

          
    
        return response()->json(['msg' => 'Requisition Created Sucess'], 200);
    }

    public function edit($id){

        $requisition = Requisition::where('id', $id)->first();

         $sector = DB::table('requisition_sectors')
                    ->leftJoin('sectors', 'sectors.id', 'requisition_sectors.requisition_sector_id')
                    ->where('requisition_sectors.requisition_id', $id)
                    ->select('sectors.id', 'sectors.sector_name')
                    ->get();

        $company = Company::where('id', $requisition->company_id)->first();

        return response()->json([
           'requisition' => $requisition,
           'sector' => $sector,
           'company' => $company,
        ], 200);
        
        return response()->json($data, 200);
    }


    public function requisition_sectors($id)
    {
         $data = DB::table('requisition_sectors')
                    ->leftJoin('sectors', 'sectors.id', 'requisition_sectors.requisition_sector_id')
                    ->where('requisition_sectors.requisition_id', $id)
                    ->select('sectors.sector_name', 'sectors.id')
                    ->get();

        return response()->json($data, 200);

    }



    public function update(Request $request, $id)
    {

    
         $requisition = Requisition::findOrfail($id);
         $requisition->kafil_id = $request->kafil_id;
         $requisition->requisition_date = $request->requisition_date;
         $requisition->company_id = $request->company_id;
         $requisition->sector_id = $request->sector_id;
         $requisition->is_approved = $request->is_approved;
         $requisition->save();

         $tradedata = $request->visaFormdata;

         foreach($visainfos as $item){
            $visainfo = new RequisitionTradeInfo();
            $visainfo->requisition_id = $requisition->id;
            $visainfo->visa_no = $item['visa_no'];
            $visainfo->qty = $item['visa_qty'];
            $visainfo->available = $item['visa_qty'];
            $visainfo->trade = $item['trade'];
            $visainfo->salary = $item['salary'];
            $visainfo->price_reference = $item['price_reference'];
            $visainfo->duty_hours = $item['duty_hours'];
            $visainfo->save();
         }

         return response()->json(['msg' => 'Requisition Updated Sucess'], 200);

    }

    public function destroy($id)
    {
        $requisition = Requisition::findOrfail($id);
         
        $visaTrade =  RequisitionTradeInfo::where('requisition_id', $requisition->id)->get();


        $msg = '';
        $error_msg = '';
        $is_passenger  = '';

        foreach($visaTrade as $visatrade){

            $passenger =  Passenger::where('passenger_trade_id', $visatrade->id)->first();

            if($passenger){
            
                $is_passenger = $passenger;

            }

        }


        if($is_passenger){
            $error_msg = 'Requisition has some passenger ';
        }else{
            $requisition->delete();
            $msg = 'Delete Success';
        }

        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,

        ], 200,);
    }

    public function requisition_visa_info($id){

        $data = RequisitionVisainfo::where('requisition_id', $id)->get();
        return response()->json($data, 200);

    }

    public function requisition_visa_trade($id){

        $visa =  RequisitionVisainfo::findOrfail($id);

        $data = RequisitionTradeInfo::where('trade_visa_no', $visa->visa_no)->get();

        return response()->json($data, 200);

    }


    public function requisition_list_by_company_id($id){

        $data = Requisition::with('visa')->where('company_id', $id)->get();

        return response()->json($data, 200);

    }
}
