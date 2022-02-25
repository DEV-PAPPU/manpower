<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sector;
use App\Models\Passenger;

class SectorController extends Controller
{
    public function index(){
        
        $sector = Sector::latest()->get();

        return response()->json($sector, 200);
    }

    public function store (Request $request){
       
        $this->validate($request,[

            'sector_name' => 'required',
        ]);
    
         $sector = new Sector();
         $sector->sector_name = $request->sector_name;
         $sector->save();
    
        return response()->json(['msg' => 'Sector Created Sucess'], 200);
    }

    public function update(Request $request, $id)
    {

         $sector = Sector::findOrfail($id);
         $sector->sector_name = $request->sector_name;
         $sector->save();

         return response()->json(['msg' => 'Sector Updated Sucess'], 200);

    }

    public function destroy($id)
    {
        $sector = Sector::findOrfail($id);

        $error_msg = '';
        $msg = '';

        $passenger = Passenger::where('passenger_sector_id', $sector->id)->first();

        if($passenger){
            $error_msg = 'Sector Has Some passengers So Can`t Delete';
            
        }
        else {
            $sector->delete();
            $msg = 'Sector  Delete Sucess ';
        }

        return response()->json([
            'msg' =>  $msg,
            'error_msg' => $error_msg
        ], 200);
    }



    public function search_sector($name)
    {

        $sector = Sector::where('sector_name', 'LIKE', "%{$name}%")->get();

        return response()->json($sector, 200);
    }
}
