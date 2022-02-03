<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    protected  $guarded = [];

    public function agent()
    {
        return $this->belongsTo(Agent::class, 'agent_id');
    }

    public function stmpassport()
    {
        // return $this->hasMany(StmPassport::class, 'passenger_id');
        return $this->hasMany(StmPassport::class, 'passenger_id')->select(['stm_passport_status']);
    }

    public function manpowerpassport()
    {
        return $this->hasMany(ManPowerPassport::class, 'passenger_id');
    }

    public function tktpassport()
    {
        return $this->hasMany(Tktpassport::class, 'passenger_id');
    }


    public function mofainformation()
    {
        return $this->hasMany(MofaInformation::class, 'passenger_id');
    }
}
