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

        $gallery = new PassengerImage();
        $gallery->passenger_id = $request->passenger_id;
        $gallery->title = $request->title;

        if($request->hasFile('image')){
            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $gallery->image = '/storage/images/' . $image_new_name;
            $gallery->save();
        }

        //  Inserting product gallery images
        // if($request->hasFile('files')){

        //     foreach($request->file('files') as  $image){

        //         // $name = $image->getClientOriginalName();
        //         $name = time().rand(1,100).'.'.$image->getClientOriginalExtension();
        //         $image->move('storage/images/', $name);
        //         $last_img = '/storage/images/' . $name;

        //         //Inserting product gallery images to {ProductGallery} model
        //         $gallery = new PassengerImage();
        //         $gallery->passenger_id = $request->passenger_id;
        //         $gallery->image = $last_img;
        //         $gallery->save();
        //     }
        // }


        return response()->json(['msg' => 'Images Added Sucess'], 200);
    }


    public function destroy($id)
    {
        $image = PassengerImage::findOrfail($id);

        $imagePath = public_path($image->image);
        unlink($imagePath);

        $image->delete();

        return response()->json(['msg' => 'Delete Sucess'], 200);

    }

}
