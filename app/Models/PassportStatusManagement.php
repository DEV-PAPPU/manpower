<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PassportStatusManagement extends Model
{
    protected  $guarded = [];

    public function passenger()
    {
        return $this->belongsTo(Passenger::class, 'passenger_id');
    }
    
    public function company()
    {
        return $this->belongsTo(company::class, 'company_id');
    }


    public function agent()
    {
        return $this->belongsTo(Agent::class, 'passenger_agent_id');
    }


    public function interview()
    {
        return $this->belongsTo(Interview::class, 'passenger_id', 'passenger_id');
    }


    public function stmpassport()
    {
        return $this->belongsTo(StmPassport::class, 'passenger_id', 'passenger_id');
    }



    public function manpowerpassport()
    {
        return $this->belongsTo(ManPowerPassport::class, 'passenger_id', 'passenger_id');
    }

    public function tktpassport()
    {
        return $this->belongsTo(Tktpassport::class, 'passenger_id', 'passenger_id');
    }


    public function sector()
    {
        return $this->belongsTo(Sector::class, 'sector_id');
    }
    public function trade()
    {
        return $this->belongsTo(RequisitionTradeInfo::class, 'trade_id');
    }
}
