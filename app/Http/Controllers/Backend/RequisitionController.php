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
use App\Models\RequisitionCompanySector;
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
            // 'sector_id' => 'required',
        ]);
    
         $requisition = new Requisition();
         $requisition->kafil_id = $request->kafil_id;
         $requisition->requisition_date = $request->requisition_date;
         $requisition->company_id = $request->company_id;
        //  $requisition->sector_id = $request->sector_id;
         $requisition->save();


         $company_sectors = $request->sector_id;

         foreach($company_sectors as $item){
            //  return $item;
            $r_c_sector = new RequisitionCompanySector();
            $r_c_sector->requisition_company_id = $request->company_id;
            $r_c_sector->requisition_company_sector_id = $item['id'];
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

    public function edit($id)
    {
        $data = Requisition::where('id', $id)->first();
        return response()->json($data, 200);
    }


    public function requisition_company_sectors($id)
    {
         $data = DB::table('companies')
                    ->leftJoin('company_sectors', 'company_sectors.company_id', 'companies.id')
                    ->join('sectors', 'sectors.id', '=', 'company_sectors.sector_id')
                    ->where('companies.id', $id)
                    ->select('sectors.sector_name', 'sectors.id')
                    ->get();

        return response()->json($data, 200);

    }


    public function search_sector_by_company($id)
    {
        $data = DB::table('companies')
                    ->leftJoin('company_sectors', 'company_sectors.company_id', 'companies.id')
                    ->join('sectors', 'sectors.id', '=', 'company_sectors.sector_id')
                    ->where('companies.id', $id)
                    ->select('sectors.id', 'sectors.sector_name')
                    ->get();

        $companysectors = '';
        $msg = '';

        if($data->count()){
            $companysectors = RequisitionCompanySector::with('sector')->where('requisition_company_id', $id)->get();
            
        }
        else{
            $msg = 'There is no sector in this company';
        }

          return response()->json([
            'msg' => $msg,
            'data' => $data,
            'companysectors' => $companysectors
        ], 200);
           

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

        if($requisition){
            $requisition->delete();

            return response()->json(['msg' => 'Requisition Delete Sucess'], 200);
        }else {
            return response()->json('failed', 404);
        }
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
}
