<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\Sector;
use App\Models\CountrySector;
use App\Models\Company;
use App\Models\Passenger;
use DB;
class CountryController extends Controller
{
    public function index(){
        
        $data = Country::latest()->get();

        return response()->json($data, 200);
    }

    public function store (Request $request){
       
        $this->validate($request,[

            'country_name' => 'required',
            'sector' => 'required',
        ]);
    
         $country = new Country();
         $country->country_name = $request->country_name;
         $country->save();


         foreach( $request->sector as $sector){
            $Country_sector = new CountrySector();
            $Country_sector->country_id = $country->id;
            $Country_sector->country_sector_id = $sector['id'];
            $Country_sector->save();
        }
    
        return response()->json(['msg' => 'Country Created Sucess'], 200);
    }


    public function update(Request $request, $id)
    {
        // return $request;
         $country = Country::findOrfail($id);
         $country->country_name = $request->country_name;
         $country->save();

         foreach( $request->sector as $sector){
              
                $Country_sector = new CountrySector();
                $Country_sector->country_id = $country->id;
                $Country_sector->country_sector_id = $sector['id'];
                $Country_sector->save();
    
        }

         return response()->json([
             'msg' => 'Country Updated Sucess',
            ], 200);

    }

    public function destroy($id)
    {
        $country = Country::findOrfail($id);
       
        $company =  Company::where('country_id', $country->id)->first();

        $error_msg = '';
        $msg = '';

        if($company){
           $error_msg = 'Country Has Some Companies So Can`t Delete';
       }
       else {

           $country->delete();
           $msg = 'Delete Sucess';
           
       }

       return response()->json([
           'msg' =>  $msg,
           'error_msg' => $error_msg
       ], 200);

    }

    public function destroy_country_sector($id)
    {

        $msg = '';

        $sector = CountrySector::where('country_sector_id', $id);
      
        $sector->delete();

        $msg = 'Country Sector Delete Sucess ';

        return response()->json([
            'msg' =>  $msg,
        ], 200);
    }


    public function country_sectors($id)
    {
                 $data = DB::table('country_sectors')
                 ->leftJoin('sectors', 'sectors.id','country_sectors.country_sector_id')
                 ->where('country_id', $id)
                 ->select('sectors.id', 'sectors.sector_name')
                 ->orderBy('sectors.sector_name', 'asc')
                 ->get(); 

        return response()->json($data, 200);
    }


}
