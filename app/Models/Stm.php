<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stm extends Model
{
    protected  $guarded = [];

    public function stmpassport()
    {
        return $this->hasMany(StmPassport::class, 'stm_id');
    }
}
