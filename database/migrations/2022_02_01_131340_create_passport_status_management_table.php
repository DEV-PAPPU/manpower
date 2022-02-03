<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePassportStatusManagementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passport_status_management', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('sector_id');
            $table->unsignedBigInteger('trade_id');
            $table->unsignedBigInteger('passenger_id');
            $table->unsignedBigInteger('passenger_agent_id')->nullable();
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
        Schema::dropIfExists('passport_status_management');
    }
}
