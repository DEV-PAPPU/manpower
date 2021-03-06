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

            'district_name' => 'required',
        ]);
    
         $district = new District();
         $district->district_name = $request->name;
         $district->save();
    
        return response()->json(['success' => 'District Created Sucess'], 200);
    }
}
