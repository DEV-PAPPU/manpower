<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManPowerPassportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('man_power_passports', function (Blueprint $table) {
            $table->id();
            $table->string('man_power_passport_no');
            $table->integer('status')->default(0)->comment('0 => Processing, 1 => Complete');
            $table->unsignedBigInteger('passenger_id');
            $table->foreign('passenger_id')->references('id')->on('passengers')->onDelete('CasCade');
            $table->unsignedBigInteger('man_power_id');
            $table->foreign('man_power_id')->references('id')->on('man_powers')->onDelete('CasCade');
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
        Schema::dropIfExists('man_power_passports');
    }
}
