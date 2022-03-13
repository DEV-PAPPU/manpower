<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Trade;
use App\Models\RequisitionTradeInfo;

class TradeController extends Controller
{
    public function index(){
        
        $trade = Trade::latest()->get();

        return response()->json($trade, 200);
    }

    public function store (Request $request){
       
        $this->validate($request,[

            'trade_name' => 'required',
        ]);
    
         $trade = new Trade();
         $trade->trade_name = $request->trade_name;
         $trade->save();
    
        return response()->json(['msg' => 'Trade Created Sucess'], 200);
    }

    public function update(Request $request, $id)
    {

        $trade = Trade::findOrfail($id);
    

        $tradeinfo = RequisitionTradeInfo::where('trade', $trade->trade_name)->get();

        $data =  $tradeinfo->count();

         if($data > 0){

            foreach( $tradeinfo as $item){

                // DB::table('requisition_trade_infos')
                //   ->where('trade', $trade->trade_name)
                //   ->update(['trade' => $request->trade_name]);
                $oldtradeinfo = RequisitionTradeInfo::findOrfail($item->id);
                $oldtradeinfo->trade = $request->trade_name;
                $oldtradeinfo->save();

             }

             $trade->trade_name = $request->trade_name;
             $trade->save();
             return response()->json(['msg' => 'Trade Updated Sucess'], 200);
         }
         else {
            $trade->trade_name = $request->trade_name;
            $trade->save();
             return response()->json(['msg' => 'Trade Updated Sucess'], 200);
          }



    }

    public function destroy($id)
    {
        $trade = Trade::findOrfail($id);

        $error_msg = '';
        $msg = '';

        $passenger = RequisitionTradeInfo::where('trade', $trade->trade_name)->first();

        if($passenger){
            $error_msg = 'Trade Has Some passengers So Can`t Delete';
            
        }
        else {
            $trade->delete();
            $msg = 'Trade  Delete Sucess ';
        }

        return response()->json([
            'msg' =>  $msg,
            'error_msg' => $error_msg
        ], 200);
    }

}
