<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->id();
            $table->string('agent_name');
            $table->string('agent_image');
            $table->string('agent_email')->nullable();
            $table->string('agent_phone')->nullable();
            $table->string('agent_imo_number')->nullable();
            $table->string('agent_wp_number')->nullable();
            $table->string('agent_address_area')->nullable();
            $table->string('agent_address_office')->nullable();
            $table->string('agent_ref_1_name')->nullable();
            $table->string('agent_ref_1_phone')->nullable();
            $table->string('agent_ref_1_imo_number')->nullable();
            $table->string('agent_ref_1_wp_number')->nullable();
            $table->string('agent_ref_2_name')->nullable();
            $table->string('agent_ref_2_phone')->nullable();
            $table->string('agent_ref_2_imo_number')->nullable();
            $table->string('agent_ref_2_wp_number')->nullable();
            $table->string('agent_ref_3_name')->nullable();
            $table->string('agent_ref_3_phone')->nullable();
            $table->string('agent_ref_3_imo_number')->nullable();
            $table->string('agent_ref_3_wp_number')->nullable();
            $table->integer('agent_status')->default(0)->comment('0 => inactive, 1 => Active');
            $table->unsignedInteger('district_id');
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
        Schema::dropIfExists('agents');
    }
}
