<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTktPassportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tkt_passports', function (Blueprint $table) {
            $table->id();
            $table->string('tkt_passport_booking_date')->nullable();
            $table->integer('tkt_passport_status')->default(0)->comment('0 => Processing, 1 => Complete');
            $table->unsignedInteger('passenger_id');
            $table->unsignedBigInteger('tkt_id');
            $table->foreign('tkt_id')->references('id')->on('tkts')->onDelete('CasCade');
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
        Schema::dropIfExists('tkt_passports');
    }
}
