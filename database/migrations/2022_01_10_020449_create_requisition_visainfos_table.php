<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequisitionVisainfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisition_visainfos', function (Blueprint $table) {
            $table->id();
            $table->string('visa_no');
            $table->string('qty');
            $table->string('booked')->nullable();
            $table->unsignedBigInteger('requisition_id');
            $table->foreign('requisition_id')->references('id')->on('requisitions')->onDelete('CasCade');
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
        Schema::dropIfExists('requisition_visainfos');
    }
}
