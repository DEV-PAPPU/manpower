<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequisitionTradeInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisition_trade_infos', function (Blueprint $table) {
            $table->id();
            $table->string('trade_visa_no');
            $table->string('trade_qty');
            $table->string('trade');
            $table->string('salary');
            $table->string('price_reference');
            $table->string('available')->default(0);
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
        Schema::dropIfExists('requisition_trade_infos');
    }
}
