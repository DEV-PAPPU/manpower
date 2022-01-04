<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\District;

class DistrictController extends Controller
{

    public function index(){
        
        $districts = District::all();

        return response()->json($districts, 200);
    }

    public function store (Request $request){
        $this->validate($request,[

            'coupon_code' => 'required|max:10',
            'coupon_amount' => 'required',
            'coupon_type' => 'required',
            'status' => 'required',
        ]);
    
         $coupon = new District();
         $coupon->coupon_code = $request->coupon_code;
         $coupon->coupon_type = $request->coupon_type;
         $coupon->coupon_amount = $request->coupon_amount;
         $coupon->user_id = $request->user_id;
         $coupon->status = $request->status;
    
         $coupon->save();
    
        return response()->json(['success' => 'District Created Sucess'], 200);
    }
}
