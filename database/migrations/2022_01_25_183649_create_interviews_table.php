<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInterviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interviews', function (Blueprint $table) {
            $table->id();
            $table->string('medical_result')->nullable()->comment('1 => Fit');
            $table->string('medical_gone_date')->nullable();
            $table->string('pc_date')->nullable();
            $table->string('tc_rcv_date')->nullable();
            $table->integer('video_passenger')->default(0)->comment('0 => No, 1 => Yes');
            $table->string('passenger_fly')->default(0)->comment('0 => No, 1 => Yes');
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
        Schema::dropIfExists('interviews');
    }
}
