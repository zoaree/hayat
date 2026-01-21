<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\PageVisit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Get all users with their analytics.
     */
    public function users(Request $request)
    {
        $users = User::withCount('pageVisits')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'first_name' => $user->first_name,
                    'last_name' => $user->last_name,
                    'full_name' => $user->full_name,
                    'email' => $user->email,
                    'is_admin' => $user->is_admin,
                    'last_login_at' => $user->last_login_at,
                    'total_session_minutes' => $user->total_session_minutes,
                    'page_visits_count' => $user->page_visits_count,
                    'created_at' => $user->created_at,
                ];
            });

        return response()->json($users);
    }

    /**
     * Create a new user.
     */
    public function createUser(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'is_admin' => 'boolean',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_admin' => $request->is_admin ?? false,
        ]);

        return response()->json([
            'message' => 'Kullanıcı başarıyla oluşturuldu.',
            'user' => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'is_admin' => $user->is_admin,
            ],
        ], 201);
    }

    /**
     * Update a user.
     */
    public function updateUser(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'first_name' => 'string|max:255',
            'last_name' => 'string|max:255',
            'email' => 'email|unique:users,email,' . $id,
            'password' => 'nullable|min:6',
            'is_admin' => 'boolean',
        ]);

        $data = $request->only(['first_name', 'last_name', 'email', 'is_admin']);

        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);

        return response()->json([
            'message' => 'Kullanıcı güncellendi.',
            'user' => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'is_admin' => $user->is_admin,
            ],
        ]);
    }

    /**
     * Delete a user.
     */
    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'Kullanıcı silindi.']);
    }

    /**
     * Get analytics overview.
     */
    public function analytics(Request $request)
    {
        $totalUsers = User::count();
        $activeToday = User::whereDate('last_login_at', today())->count();
        $totalSessionMinutes = User::sum('total_session_minutes');

        // Most visited pages
        $topPages = PageVisit::select('page_path', DB::raw('COUNT(*) as visit_count'), DB::raw('SUM(duration_seconds) as total_duration'))
            ->groupBy('page_path')
            ->orderByDesc('visit_count')
            ->limit(10)
            ->get();

        // Recent activity
        $recentActivity = User::whereNotNull('last_login_at')
            ->orderBy('last_login_at', 'desc')
            ->limit(10)
            ->get(['id', 'first_name', 'last_name', 'last_login_at', 'total_session_minutes']);

        return response()->json([
            'total_users' => $totalUsers,
            'active_today' => $activeToday,
            'total_session_hours' => round($totalSessionMinutes / 60, 1),
            'top_pages' => $topPages,
            'recent_activity' => $recentActivity,
        ]);
    }

    /**
     * Get analytics for a specific user.
     */
    public function userAnalytics($id)
    {
        $user = User::findOrFail($id);

        // User's page visits
        $pageVisits = PageVisit::where('user_id', $id)
            ->orderBy('visited_at', 'desc')
            ->limit(50)
            ->get(['page_path', 'duration_seconds', 'visited_at']);

        // User's most visited pages
        $topPages = PageVisit::where('user_id', $id)
            ->select('page_path', DB::raw('COUNT(*) as visit_count'), DB::raw('SUM(duration_seconds) as total_duration'))
            ->groupBy('page_path')
            ->orderByDesc('visit_count')
            ->limit(10)
            ->get();

        // Calculate total time on each page
        $totalDuration = PageVisit::where('user_id', $id)->sum('duration_seconds');

        return response()->json([
            'user' => [
                'id' => $user->id,
                'full_name' => $user->full_name,
                'email' => $user->email,
                'last_login_at' => $user->last_login_at,
                'total_session_minutes' => $user->total_session_minutes,
                'created_at' => $user->created_at,
            ],
            'total_visits' => $pageVisits->count(),
            'total_duration_minutes' => round($totalDuration / 60, 1),
            'top_pages' => $topPages,
            'recent_visits' => $pageVisits,
        ]);
    }
}
