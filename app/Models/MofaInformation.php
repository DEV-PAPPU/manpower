<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MofaInformation extends Model
{
    protected  $guarded = [];

    public function trade()
    {
        return $this->belongsTo(RequisitionTradeInfo::class, 'trade_id');
    }

    public function passenger()
    {
        return $this->belongsTo(Passenger::class, 'passenger_id');
    }

}
