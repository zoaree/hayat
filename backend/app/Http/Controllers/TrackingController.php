<?php

namespace App\Http\Controllers;

use App\Models\PageVisit;
use Illuminate\Http\Request;

class TrackingController extends Controller
{
    /**
     * Track a page visit.
     */
    public function trackPage(Request $request)
    {
        $request->validate([
            'page_path' => 'required|string',
            'duration_seconds' => 'integer|min:0',
        ]);

        PageVisit::create([
            'user_id' => $request->user()->id,
            'page_path' => $request->page_path,
            'duration_seconds' => $request->duration_seconds ?? 0,
            'visited_at' => now(),
        ]);

        return response()->json(['message' => 'Tracked']);
    }

    /**
     * Update session duration (heartbeat).
     */
    public function heartbeat(Request $request)
    {
        $request->validate([
            'minutes' => 'required|integer|min:1',
        ]);

        $user = $request->user();
        $user->increment('total_session_minutes', $request->minutes);

        return response()->json([
            'total_session_minutes' => $user->total_session_minutes,
        ]);
    }
}
