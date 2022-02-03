<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TktPassport extends Model
{
    protected  $guarded = [];

    public function passenger()
    {
        return $this->belongsTo(Passenger::class, 'passenger_id');
    }
}
