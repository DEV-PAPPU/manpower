<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStmPassportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stm_passports', function (Blueprint $table) {
            $table->id();
            $table->string('stm_passport_complete_date')->nullable();
            $table->integer('stm_passport_status')->default(0)->comment('0 => Processing, 1 => Complete');
            $table->unsignedInteger('passenger_id');
            $table->unsignedBigInteger('stm_id');
            $table->foreign('stm_id')->references('id')->on('stms')->onDelete('CasCade');
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
        Schema::dropIfExists('stm_passports');
    }
}
