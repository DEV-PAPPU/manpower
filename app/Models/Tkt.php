<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tkt extends Model
{
    protected  $guarded = [];

    public function tktpassport()
    {
        return $this->hasMany(TktPassport::class, 'tkt_id');
    }
}
