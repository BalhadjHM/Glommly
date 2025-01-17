<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    /** @use HasFactory<\Database\Factories\LikeFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'content_id',
    ]

     public function content()
     {
         return $this->morphTo();
     }

      public function notifications()
      {
          return $this->morphMany(Notification::class, 'source');
      }

}
