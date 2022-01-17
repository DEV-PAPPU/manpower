<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MofaInformation;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use DB;
class MofaInformationController extends Controller{
  
    public function index(){
        
        $data = DB::table('mofa_information')
                    ->leftJoin('passengers', 'passengers.id', 'mofa_information.passenger_id')
                    ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.id', 'mofa_information.trade_id')
                    ->select('mofa_information.id', 'passengers.passenger_name', 'passengers.passport_no',
                              'requisition_trade_infos.trade_visa_no', 'mofa_information.discount',
                             'requisition_trade_infos.trade', 'requisition_trade_infos.salary', 
                             'requisition_trade_infos.price_reference' )
                    ->get();

        // $data = MofaInformation::with('trade','passenger')->latest()->get();

        return response()->json($data, 200);
    }


    public function store (Request $request){
       
        $this->validate($request,[
            'passenger_id' => 'required',
            'trade_id' => 'required',
        ]);


         $mofa = new MofaInformation();
         $mofa->discount = $request->discount;
         $mofa->passenger_id = $request->passenger_id;
         $mofa->trade_id = $request->trade_id;
         $mofa->save();

         $trade = RequisitionTradeInfo::findOrfail($request->trade_id);

         RequisitionVisainfo::where('visa_no', $trade->trade_visa_no)->increment('booked');

         RequisitionTradeInfo::where('id', $request->trade_id)->decrement('available');


        return response()->json(['msg' => 'Mofa Information Created Sucess'], 200);
    }


    public function edit($id)
    {
        $agent = MofaInformation::where('id', $id)->first();
        return response()->json($agent, 200);

    }

    public function update (Request $request, $id){
       
           $mofaTrade_id = $request->requisition_visainfo_id;

           
           $mofa =  MofaInformation::findOrfail($id);
            // $mofa->discount = $request->discount;
            // $mofa->passenger_id = $request->passenger_id;
            // $mofa->requisition_visainfo_id = $request->visa_trade_id;
            // $mofa->save();

            $mofa_id = $mofa->requisition_visainfo_id;
            $mofatrade =  RequisitionVisainfo::findOrfail($mofa_id);
            $mofatrade->is_available = 1;
            $mofatrade->save();

            $mofatrade =  RequisitionVisainfo::findOrfail($mofaTrade_id);
            $mofatrade->is_available = 0;
            $mofatrade->save();

    
        return response()->json(['msg' => 'Mofa Information Updated Sucess'], 200);
    }


    public function destroy($id)
    {
        $mofa = MofaInformation::findOrfail($id);

        if($mofa){
            $mofa->delete();

            return response()->json(['msg' => 'Delete Sucess'], 200);
        }else {
            return response()->json('failed', 404);
        }
    }

    public function visa_trades(){
        
        $data = RequisitionVisainfo::latest()->get();

        return response()->json($data, 200);
    }

    public function trade_data(){
       
        $data = RequisitionTradeInfo::select('*')
                ->where([['available', '>', 0]])
                ->latest()
                ->get();

        return response()->json($data, 200);
    }
}
