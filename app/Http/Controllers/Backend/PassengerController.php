<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Passenger;

class PassengerController extends Controller
{
    
    public function index(){
        
        $passengers = Passenger::latest()->get();
        // $passengers = DB::table('passengers')
        //             ->leftJoin('districts', 'passengers.id', '=', 'district_id')
        //             // ->select('passengers.id','passengers.name', 'passengers.email', 'districts.name');
        //             ->get();

        return response()->json($passengers, 200);
    }


    public function store (Request $request){
       
        dd($request->all());
       
        // $this->validate($request,[

        //     'name' => 'required',
        //     'address' => 'required',
        //     'area' => 'required',
        //     'phone' => 'required',
        //     'district_id' => 'required',
        //     'email' => ['required', 'email', 'unique:companies'],
        // ]);
    
         $passenger = new Passenger();
         $passenger->passenger_name = $request->passenger_name;
         $passenger->passenger_father_name = $request->passenger_father_name;
         $passenger->passenger_gurdian_no = $request->passenger_gurdian_no;
         $passenger->passenger_date_of_birth = $request->passenger_date_of_birth;
         $passenger->passport_expire_date = $request->passport_expire_date;
         $passenger->passport_no = $request->passport_no;
         $passenger->old_passport_no = $request->old_passport_no;
         $passenger->passport_source = $request->passport_source;
         $passenger->passenger_gender = $request->passenger_gender;
         $passenger->passenger_phone = $request->passenger_phone;
         $passenger->passenger_is_approved = $request->passenger_is_approved;
         $passenger->district_id = $request->district_id;
         $passenger->agent_id = $request->agent_id;

         if($request->hasFile('passenger_photo')){

            $image = $request->passenger_photo;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $category->image = '/storage/images/' . $image_new_name;
            $passenger->save();
        }

    
        return response()->json(['msg' => 'Passenger Added Sucess'], 200);
    }


    public function edit($id)
    {
        $passenger = passenger::find($id);
        return response()->json($passenger, 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\passenger  $passenger
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

         $passenger = passenger::findOrfail($id);
         if($request->hasFile('image')){

            $categoryImage = $category->image;
            $imagePath = public_path($categoryImage);

            if ($categoryImage && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $category->image = '/storage/images/' . $image_new_name;
            $category->save();
        }

         return response()->json(['msg' => 'passenger Updated Sucess'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\passenger  $passenger
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $passenger = passenger::findOrfail($id);

        if($passenger){
            $passenger->delete();

            return response()->json(['msg' => 'Delete Sucess'], 200);
        }else {
            return response()->json('failed', 404);
        }
    }
}
