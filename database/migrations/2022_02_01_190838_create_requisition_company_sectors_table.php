<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequisitionCompanySectorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisition_company_sectors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('requisition_company_sector_id');
            $table->unsignedBigInteger('requisition_company_id');
            $table->foreign('requisition_company_id')->references('id')->on('companies')->onDelete('CasCade');
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
        Schema::dropIfExists('requisition_company_sectors');
    }
}
