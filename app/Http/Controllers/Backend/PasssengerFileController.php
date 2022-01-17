<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PassengerImage;
class PasssengerFileController extends Controller
{
    public function images ($id){
        $data = PassengerImage::where('passenger_id',$id)->latest()->get();
        return response()->json($data, 200);
    }

    public function store (Request $request){
        // dd($request->all());

        //  Inserting product gallery images
        if($request->hasFile('files')){

            foreach($request->file('files') as  $image){

                // $name = $image->getClientOriginalName();
                $name = time().rand(1,100).'.'.$image->getClientOriginalExtension();
                $image->move('storage/images/', $name);
                $last_img = '/storage/images/' . $name;

                //Inserting product gallery images to {ProductGallery} model
                $gallery = new PassengerImage();
                $gallery->passenger_id = $request->passenger_id;
                $gallery->image = $last_img;
                $gallery->save();
            }
        }


        return response()->json(['msg' => 'Images Added Sucess'], 200);
    }
}
