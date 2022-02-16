<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('company_brand_logo')->nullable();
            $table->string('company_note')->nullable();
            $table->string('company_address')->nullable();
            $table->string('contact_person')->nullable();
            $table->string('company_email')->nullable();
            $table->string('company_phone')->nullable();
            $table->integer('status')->default(1)->comment('1 => In-active, 0 => Active');
            $table->unsignedInteger('country_id');
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
        Schema::dropIfExists('companies');
    }
}
