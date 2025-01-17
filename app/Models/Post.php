<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable = [
        'content',
        'media_url',
        'category',
        'visibility',
    ];

    // Define the relationship between the post and the comments
    public function likes()
    {
        return $this->morphMany(Like::class, 'content');
    }

    // Define the relationship between the post and the notifications
    public function notifications()
    {
        return $this->morphMany(Notification::class, 'source');
    }

    // Define the relationship between the post and the user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
