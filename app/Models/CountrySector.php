<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountrySector extends Model
{
    protected  $guarded = [];

    public function sector()
    {
        return $this->belongsTo(Sector::class, 'sector_id');
    }

}
