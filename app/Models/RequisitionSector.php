<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequisitionSector extends Model
{
    protected  $guarded = [];

    public function sector()
    {
        return $this->belongsTo(Sector::class, 'requisition_sector_id');
    }

}
