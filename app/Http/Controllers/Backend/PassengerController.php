<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Passenger;
use DB;
class PassengerController extends Controller
{
    public function index(){
        
        $passengers = Passenger::latest()->get();
        $passengers = DB::table('passengers')
                    ->leftJoin('agents', 'agents.id', '=', 'passengers.agent_id')
                    ->leftJoin('districts', 'districts.id', '=', 'passengers.district_id')
                    ->select('passengers.id','passengers.passenger_name', 'passengers.passenger_father_name',
                    'passengers.passenger_date_of_birth', 'passengers.passenger_gurdian_no','passengers.passenger_gender',
                    'passengers.passport_source','passengers.passport_no','passengers.is_approved','passengers.old_passport_no',
                    'passengers.passenger_phone','districts.district_name', 'agents.agent_name')
                    ->get();

        return response()->json($passengers, 200);
    }


    public function store (Request $request){
       
        // dd($request->all());
       
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
         $passenger->is_approved = $request->is_approved;
         $passenger->district_id = $request->district_id;
         $passenger->agent_id = $request->agent_id;

         if($request->hasFile('passenger_photo')){

            $image = $request->passenger_photo;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $passenger->passenger_photo = '/storage/images/' . $image_new_name;
            $passenger->save();
        }

    
        return response()->json(['msg' => 'Passenger Added Sucess'], 200);
    }


    public function edit($id)
    {
        $passenger = Passenger::find($id);
        return response()->json($passenger, 200);

    }


    public function update(Request $request, $id)
    {

        // dd($request->all());

         $passenger = Passenger::findOrfail($id);
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
         $passenger->is_approved = $request->is_approved;
         $passenger->district_id = $request->district_id;
         $passenger->agent_id = $request->agent_id;
         $passenger->save();

         if($request->hasFile('passenger_photo')){

            $passengerImage = $passenger->image;
            $imagePath = public_path($passengerImage);

            if ($passengerImage && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $image = $request->passenger_photo;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $passenger->passenger_photo = '/storage/images/' . $image_new_name;
            $passenger->save();
        }

         return response()->json(['msg' => 'Passenger Updated Sucess'], 200);

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
