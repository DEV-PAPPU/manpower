<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountrySector extends Model
{
    protected  $guarded = [];

    public function sector()
    {
        return $this->HasMany(Sector::class, 'country_sector_id');
    }
}
