<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePassengerfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passengerfiles', function (Blueprint $table) {
            $table->id();
            $table->string('file')->unique();
            $table->unsignedBigInteger('passenger_id');
            $table->foreign('passenger_id')->references('id')->on('passengers')->onDelete('CasCade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('passengerfiles');
    }
}
