<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageVisit extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'page_path',
        'duration_seconds',
        'visited_at',
    ];

    protected $casts = [
        'visited_at' => 'datetime',
    ];

    /**
     * Get the user that owns the page visit.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
