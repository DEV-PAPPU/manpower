<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManPower extends Model
{
    protected  $guarded = [];

    public function mppassport()
    {
        return $this->hasMany(ManPowerPassport::class, 'man_power_id');
    }
}
