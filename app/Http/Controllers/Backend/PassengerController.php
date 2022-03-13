<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Passenger;
use App\Models\RequisitionTradeInfo;
use App\Models\RequisitionVisainfo;
use App\Models\District;
use App\Models\Agent;
use App\Models\Company;
use App\Models\Sector;
use App\Models\Interview;
use App\Models\PassengerImage;
use App\Models\TktPassport;
use DB;
class PassengerController extends Controller
{
    public function index(){
        
        $passengers = Passenger::latest()->get();
        $passengers = DB::table('passengers')
                    ->leftJoin('agents', 'agents.id', '=', 'passengers.agent_id')
                    ->leftJoin('districts', 'districts.id', '=', 'passengers.district_id')
                    ->select('passengers.id','passengers.passenger_name', 'passengers.passenger_father_name', 
                    'passengers.passport_expire_date',
                    'passengers.passenger_date_of_birth', 'passengers.passenger_gurdian_no','passengers.passenger_gender',
                    'passengers.passport_source','passengers.passport_no','passengers.old_passport_no',
                    'passengers.passenger_phone','districts.district_name', 'agents.agent_name')
                    ->get();

        return response()->json($passengers, 200);
    }


    public function store (Request $request){
       
        // dd($request->all());
       
        // $this->validate($request,[

        //     // 'name' => 'required',
        //     // 'address' => 'required',
        //     // 'area' => 'required',
        //     // 'phone' => 'required',
        //     // 'district_id' => 'required',
        //     // 'passport_no' => ['required', 'passport_no', 'unique:passengers'],
        // ]);

         $error_msg = '';
         $msg = '';
         $passenger_id = '';

         $old_passenger = Passenger::where('passport_no', $request->passport_no)->first();

         if($old_passenger){
            $error_msg = 'Passport already added';
         }
         else {
                    
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
            $passenger->district_id = $request->district_id;
            $passenger->passenger_total_pay = 0;
        
            $passenger->passenger_discount = $request->discount;
            $passenger->passenger_trade_id = $request->trade_id;
            $passenger->passenger_sector_id = $request->sector_id;
            $passenger->passenger_company_id = $request->company_id;
            $passenger->passenger_note = $request->note;
 

            if($passenger->agent_id){

                $passenger->agent_id = $request->agent_id;
            }

            if($request->hasFile('passenger_photo')){

                $image = $request->passenger_photo;
                $image_new_name = time() . '.' . $image->getClientOriginalExtension();
                $image->move('storage/images/', $image_new_name);
                $passenger->passenger_photo = '/storage/images/' . $image_new_name;
                $passenger->save();

                $msg = 'Passenger Added Sucess';
            }

            $passenger_id = $passenger->id;
         }


            $interview = new Interview();
            $interview->passenger_id = $passenger_id;
            $interview->video_passenger = $request->video;
            $interview->medical_result = $request->medical;
            $interview->medical_gone_date = $request->gone_date;
            $interview->pc_date = $request->pc_date;
            $interview->tc_rcv_date = $request->tc_rcv_date;

            if($request->tc_rcv_date){
                $interview->tc_rcv_status = 1;
            }
            else{
                $interview->tc_rcv_status = 0;
            }
    
            if($request->pc_date){
                $interview->pc_status = 1;
            }
            else{
                $interview->pc_status = 0;
            }
            $interview->save();


         $trade = RequisitionTradeInfo::findOrfail($request->trade_id);
         
         RequisitionVisainfo::where('visa_no', $trade->trade_visa_no)->increment('booked');

         RequisitionTradeInfo::where('id', $request->trade_id)->decrement('available');

    
        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,

        ], 200);
    }


    public function edit($id)
    {
        $passenger = Passenger::findOrfail($id);
        $district = District::where('id', $passenger->district_id)->first();
       
        $agent = '';

        if($passenger->passport_source == 'agent'){
            $agent =  Agent::where('id', $passenger->agent_id)->first();
        }

        $sector = Sector::where('id', $passenger->passenger_sector_id)->first();
        $company = Company::where('id', $passenger->passenger_company_id)->first();
        $trade = RequisitionTradeInfo::where('id', $passenger->passenger_trade_id)->first();

        return response()->json([
           'passenger' => $passenger,
           'district' => $district,
           'agent' => $agent,
           'sector' => $sector,
           'company' => $company,
           'trade' => $trade,
        ], 200);

    }


    public function update(Request $request, $id)
    {

        // dd($request->all());

        $passenger = Passenger::findOrfail($id);

        
        if($request->trade_id){

            RequisitionTradeInfo::where('id', $passenger->passenger_trade_id)->increment('available');
            RequisitionTradeInfo::where('id', $request->trade_id)->decrement('available');
            $passenger->passenger_trade_id = $request->trade_id;
        }
        
        
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
        $passenger->district_id = $request->district_id;

        if($passenger->agent_id){

            $passenger->agent_id = $request->agent_id;
        }
        
        $passenger->passenger_discount = $request->discount;
        $passenger->passenger_sector_id = $request->sector_id;
        
        $passenger->passenger_company_id = $request->company_id;
        $passenger->passenger_note = $request->note;


         if($request->hasFile('passenger_photo')){

            $passengerImage = $passenger->passenger_photo;
           
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
        else{
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
        $passenger = Passenger::findOrfail($id);

        $passenger_images =  PassengerImage::where('passenger_id', $passenger->id)->get();
     
        $interview =  Interview::where('passenger_id', $passenger->id)->first();

        $error_msg = '';
        $msg = '';

        if ($passenger_images) {

            $images = $passenger_images;

            foreach($images as $gallery){

                $imagePath = public_path($gallery->image);
                unlink($imagePath);

                PassengerImage::where('passenger_id', $passenger->id)->delete();
            }
        }


        if($interview){
            $error_msg = 'Passenger Already Interview So Can`t Delete';
        }
        else {
            $passengerImage = $passenger->passenger_photo;
            $imagePath = public_path($passengerImage);

            if ($passengerImage && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $passenger->delete();
           
            $msg = 'Delete Sucess';
        }


        return response()->json([
            'msg' =>  $msg,
            'error_msg' => $error_msg
        ], 200);

        
    }



    public function change_fly_status($id){
        
        $error_msg = '';
        $msg = '';
        $passenger = Passenger::findOrfail($id);

        $is_tkt_done = TktPassport::where('passenger_id', $passenger->id)->first();
        
        //if TktPassport status 0 so  fly pending
        if($is_tkt_done){
           
            if($is_tkt_done->tkt_passport_status == '0'){
                $error_msg = 'Please Complate Tkt first';
            }
            elseif($is_tkt_done->tkt_passport_status == '1'){
                $passenger->passenger_fly = 1;
                $passenger->save();
                $msg = 'Passenger Flyed Done :)';
            }
            else {
                $error_msg = 'Please Complate Tkt first';
            }
            
        }
        else {
            $error_msg = 'Please Complate Tkt first';
        }

        return response()->json([
            'msg' => $msg,
            'error_msg' => $error_msg,
        ], 200,);
        

    }
}
