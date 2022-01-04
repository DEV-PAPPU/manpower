<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{

    public function index(){
        
        $companies = Company::latest()->get();

        return response()->json($companies, 200);
    }


    public function edit($id)
    {
        $coupon = Coupon::find($id);
        return response()->json($coupon, 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

         $coupon = Coupon::findOrfail($id);
         $coupon->coupon_code = $request->coupon_code;
         $coupon->coupon_type = $request->coupon_type;
         $coupon->coupon_amount = $request->coupon_amount;
         $coupon->user_id = $request->user_id;
         $coupon->status = $request->status;
         $coupon->save();

         return response()->json(['success' => 'Cououn Updated Sucess'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $coupon = Coupon::findOrfail($id);

        if($coupon){
            $coupon->delete();

            return response()->json('success', 200);
        }else {
            return response()->json('failed', 404);
        }
    }
}
