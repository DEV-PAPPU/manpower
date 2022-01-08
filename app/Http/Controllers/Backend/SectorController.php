<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sector;

class SectorController extends Controller
{
    public function index(){
        
        $sector = Sector::latest()->get();

        return response()->json($sector, 200);
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
