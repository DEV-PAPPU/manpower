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

    public function interview()
    {
        return $this->belongsTo(Interview::class, 'id', 'passenger_id');
    }


    public function stmpassport()
    {
        return $this->hasMany(StmPassport::class, 'passenger_id');
        // return $this->hasMany(StmPassport::class, 'passenger_id')->select(['stm_passport_status']);
    }


    public function manpowerpassport()
    {
        return $this->hasMany(ManPowerPassport::class, 'passenger_id');
    }


    public function tktpassport()
    {
        return $this->hasMany(Tktpassport::class, 'passenger_id');
    }


    public function trade()
    {
        return $this->belongsTo(RequisitionTradeInfo::class, 'passenger_trade_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'passenger_company_id');
    }

    public function sector()
    {
        return $this->belongsTo(Sector::class, 'passenger_sector_id');
    }
}
