<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgentImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agent_images', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('agent_image_title')->nullable();
            $table->unsignedInteger('agent_id');
            // $table->unsignedBigInteger('agent_id');
            // $table->foreign('agent_id')->references('id')->on('agents')->onDelete('CasCade');
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
        Schema::dropIfExists('agent_images');
    }
}
