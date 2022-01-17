<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePassengersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passengers', function (Blueprint $table) {
            $table->id();
            $table->string('passenger_name');
            $table->string('passenger_father_name');
            $table->string('passenger_gurdian_no')->nullable();
            $table->string('passenger_photo')->nullable();
            $table->string('passenger_phone');
            $table->string('passenger_date_of_birth');
            $table->string('passport_no');
            $table->string('passport_source')->nullable();
            $table->string('passport_expire_date');
            $table->string('old_passport_no')->nullable();
            $table->string('passenger_gender');
            $table->integer('is_approved')->nullable();
            $table->unsignedInteger('district_id');
            $table->unsignedInteger('agent_id')->nullable();
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
        Schema::dropIfExists('passengers');
    }
}
