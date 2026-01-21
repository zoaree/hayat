import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const API_URL = 'https://hayatapi.abdulkadirunsal.com.tr/api';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    email: string;
    is_admin: boolean;
    last_login_at: string | null;
    total_session_minutes: number;
    page_visits_count: number;
}

interface Analytics {
    total_users: number;
    active_today: number;
    total_session_hours: number;
    top_pages: { page_path: string; visit_count: number; total_duration: number }[];
    recent_activity: { id: number; first_name: string; last_name: string; last_login_at: string; total_session_minutes: number }[];
}

interface UserAnalytics {
    user: {
        id: number;
        full_name: string;
        email: string;
        last_login_at: string | null;
        total_session_minutes: number;
        created_at: string;
    };
    total_visits: number;
    total_duration_minutes: number;
    top_pages: { page_path: string; visit_count: number; total_duration: number }[];
    recent_visits: { page_path: string; duration_seconds: number; visited_at: string }[];
}

interface AdminDashboardProps {
    onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
    const { token, user, logout } = useAuth();
    const [users, setUsers] = useState<User[]>([]);
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [activeTab, setActiveTab] = useState<'users' | 'analytics'>('users');
    const [isLoading, setIsLoading] = useState(true);
    const [showAddUser, setShowAddUser] = useState(false);
    const [newUser, setNewUser] = useState({ first_name: '', last_name: '', email: '', password: '', is_admin: false });
    const [error, setError] = useState('');

    // Delete confirmation state
    const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

    // User detail state
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [userAnalytics, setUserAnalytics] = useState<UserAnalytics | null>(null);
    const [loadingUserAnalytics, setLoadingUserAnalytics] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [usersRes, analyticsRes] = await Promise.all([
                fetch(`${API_URL}/admin/users`, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } }),
                fetch(`${API_URL}/admin/analytics`, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } }),
            ]);
            if (usersRes.ok) setUsers(await usersRes.json());
            if (analyticsRes.ok) setAnalytics(await analyticsRes.json());
        } catch (err) {
            setError('Veriler yüklenirken hata oluştu.');
        }
        setIsLoading(false);
    };

    const fetchUserAnalytics = async (userId: number) => {
        setLoadingUserAnalytics(true);
        try {
            const res = await fetch(`${API_URL}/admin/users/${userId}/analytics`, {
                headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }
            });
            if (res.ok) {
                setUserAnalytics(await res.json());
                setSelectedUserId(userId);
            }
        } catch (err) {
            setError('Kullanıcı verileri yüklenemedi.');
        }
        setLoadingUserAnalytics(false);
    };

    useEffect(() => {
        fetchData();
    }, [token]);

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch(`${API_URL}/admin/users`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(newUser),
            });
            if (res.ok) {
                setShowAddUser(false);
                setNewUser({ first_name: '', last_name: '', email: '', password: '', is_admin: false });
                fetchData();
            } else {
                const data = await res.json();
                setError(data.message || 'Kullanıcı eklenemedi.');
            }
        } catch (err) {
            setError('Bir hata oluştu.');
        }
    };

    const handleDeleteUser = (id: number, e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setDeleteConfirmId(id);
    };

    const confirmDeleteUser = async () => {
        if (!deleteConfirmId) return;

        try {
            const res = await fetch(`${API_URL}/admin/users/${deleteConfirmId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (res.ok) {
                setError('');
                fetchData();
            } else {
                const data = await res.json();
                setError(data.message || 'Kullanıcı silinemedi.');
            }
        } catch (err) {
            setError('Kullanıcı silinemedi. Bağlantı hatası.');
        }
        setDeleteConfirmId(null);
    };

    const formatPagePath = (path: string) => {
        if (path === '/' || path === '/home') return 'Ana Sayfa';
        return path.replace(/\//g, '').replace(/-/g, ' ').toUpperCase();
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="text-xl font-black text-slate-900">Admin Paneli</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-500">Hoş geldiniz, <strong>{user?.first_name}</strong></span>
                    <button onClick={logout} className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors">
                        Çıkış Yap
                    </button>
                </div>
            </header>

            {/* Tabs */}
            <div className="px-6 py-4 border-b border-slate-200 bg-white">
                <div className="flex gap-2">
                    {[
                        { id: 'users', label: 'Kullanıcılar', icon: '👥' },
                        { id: 'analytics', label: 'Genel Analitik', icon: '📊' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-orange-100 text-orange-600' : 'text-slate-500 hover:bg-slate-100'}`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 max-w-7xl mx-auto">
                {error && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">{error}</div>
                )}

                {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
                    </div>
                ) : activeTab === 'users' ? (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-slate-900">Kayıtlı Kullanıcılar ({users.length})</h2>
                            <button onClick={() => setShowAddUser(true)} className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors">
                                + Yeni Kullanıcı
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">Kullanıcı</th>
                                        <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">E-posta</th>
                                        <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">Rol</th>
                                        <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">Son Giriş</th>
                                        <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase">Süre</th>
                                        <th className="text-right px-4 py-3 text-xs font-bold text-slate-500 uppercase">İşlem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((u) => (
                                        <tr
                                            key={u.id}
                                            className="border-b border-slate-100 hover:bg-orange-50 cursor-pointer transition-colors"
                                            onClick={() => fetchUserAnalytics(u.id)}
                                        >
                                            <td className="px-4 py-3 font-medium text-slate-900">{u.full_name}</td>
                                            <td className="px-4 py-3 text-sm text-slate-500">{u.email}</td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${u.is_admin ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-600'}`}>
                                                    {u.is_admin ? 'Admin' : 'Kullanıcı'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-slate-500">{u.last_login_at ? new Date(u.last_login_at).toLocaleString('tr-TR') : '-'}</td>
                                            <td className="px-4 py-3 text-sm text-slate-500">{u.total_session_minutes} dk</td>
                                            <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                                                <button
                                                    onClick={() => fetchUserAnalytics(u.id)}
                                                    className="text-blue-500 hover:text-blue-700 text-sm font-bold mr-3"
                                                >
                                                    📊 Detay
                                                </button>
                                                <button
                                                    onClick={(e) => handleDeleteUser(u.id, e)}
                                                    className="text-red-500 hover:text-red-700 text-sm font-bold"
                                                >
                                                    Sil
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <div className="text-3xl font-black text-orange-500">{analytics?.total_users || 0}</div>
                            <div className="text-sm text-slate-500 mt-1">Toplam Kullanıcı</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <div className="text-3xl font-black text-green-500">{analytics?.active_today || 0}</div>
                            <div className="text-sm text-slate-500 mt-1">Bugün Aktif</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <div className="text-3xl font-black text-blue-500">{analytics?.total_session_hours || 0}h</div>
                            <div className="text-sm text-slate-500 mt-1">Toplam Süre</div>
                        </div>

                        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4">En Çok Ziyaret Edilen Sayfalar</h3>
                            <div className="space-y-2">
                                {analytics?.top_pages.map((p, i) => (
                                    <div key={i} className="flex justify-between text-sm">
                                        <span className="text-slate-600">{formatPagePath(p.page_path)}</span>
                                        <span className="font-bold text-slate-900">{p.visit_count} ziyaret</span>
                                    </div>
                                ))}
                                {(!analytics?.top_pages || analytics.top_pages.length === 0) && (
                                    <p className="text-slate-400 text-sm">Henüz veri yok</p>
                                )}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4">Son Aktivite</h3>
                            <div className="space-y-3">
                                {analytics?.recent_activity.map((a, i) => (
                                    <div key={i} className="text-sm">
                                        <div className="font-medium text-slate-900">{a.first_name} {a.last_name}</div>
                                        <div className="text-xs text-slate-400">{new Date(a.last_login_at).toLocaleString('tr-TR')}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* User Detail Modal */}
            {selectedUserId && userAnalytics && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-black text-slate-900">{userAnalytics.user.full_name}</h3>
                                <p className="text-sm text-slate-500">{userAnalytics.user.email}</p>
                            </div>
                            <button
                                onClick={() => { setSelectedUserId(null); setUserAnalytics(null); }}
                                className="p-2 hover:bg-slate-100 rounded-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* User Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-black text-orange-500">{userAnalytics.total_visits}</div>
                                <div className="text-xs text-slate-500">Toplam Ziyaret</div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-black text-blue-500">{userAnalytics.total_duration_minutes} dk</div>
                                <div className="text-xs text-slate-500">Toplam Süre</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl text-center">
                                <div className="text-2xl font-black text-green-500">{userAnalytics.user.total_session_minutes} dk</div>
                                <div className="text-xs text-slate-500">Oturum Süresi</div>
                            </div>
                        </div>

                        {/* User's Top Pages */}
                        <div className="mb-6">
                            <h4 className="font-bold text-slate-900 mb-3">En Çok Ziyaret Ettiği Sayfalar</h4>
                            <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                                {userAnalytics.top_pages.length > 0 ? (
                                    userAnalytics.top_pages.map((p, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="text-slate-600">{formatPagePath(p.page_path)}</span>
                                            <div className="text-right">
                                                <span className="font-bold text-slate-900">{p.visit_count} ziyaret</span>
                                                <span className="text-slate-400 ml-2">({Math.round(p.total_duration / 60)} dk)</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-slate-400 text-sm">Henüz sayfa ziyareti yok</p>
                                )}
                            </div>
                        </div>

                        {/* User's Recent Visits */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3">Son Ziyaretler</h4>
                            <div className="bg-slate-50 rounded-xl p-4 max-h-48 overflow-y-auto">
                                {userAnalytics.recent_visits.length > 0 ? (
                                    <div className="space-y-2">
                                        {userAnalytics.recent_visits.map((v, i) => (
                                            <div key={i} className="flex justify-between text-sm border-b border-slate-200 pb-2 last:border-0">
                                                <div>
                                                    <div className="font-medium text-slate-900">{formatPagePath(v.page_path)}</div>
                                                    <div className="text-xs text-slate-400">{new Date(v.visited_at).toLocaleString('tr-TR')}</div>
                                                </div>
                                                <span className="text-slate-500">{v.duration_seconds}s</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-slate-400 text-sm">Henüz ziyaret kaydı yok</p>
                                )}
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-400">
                            Kayıt Tarihi: {new Date(userAnalytics.user.created_at).toLocaleString('tr-TR')}
                            {userAnalytics.user.last_login_at && (
                                <span className="ml-4">Son Giriş: {new Date(userAnalytics.user.last_login_at).toLocaleString('tr-TR')}</span>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Add User Modal */}
            {showAddUser && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Yeni Kullanıcı Ekle</h3>
                        <form onSubmit={handleAddUser} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Ad"
                                    value={newUser.first_name}
                                    onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
                                    className="px-3 py-2 border border-slate-200 rounded-lg"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Soyad"
                                    value={newUser.last_name}
                                    onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
                                    className="px-3 py-2 border border-slate-200 rounded-lg"
                                    required
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="E-posta"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Şifre"
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                                required
                            />
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={newUser.is_admin}
                                    onChange={(e) => setNewUser({ ...newUser, is_admin: e.target.checked })}
                                    className="rounded"
                                />
                                Admin yetkisi ver
                            </label>
                            <div className="flex gap-2">
                                <button type="button" onClick={() => setShowAddUser(false)} className="flex-1 py-2 border border-slate-200 rounded-lg font-bold text-slate-600">
                                    İptal
                                </button>
                                <button type="submit" className="flex-1 py-2 bg-orange-500 text-white rounded-lg font-bold">
                                    Ekle
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteConfirmId && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center">
                        <div className="text-5xl mb-4">⚠️</div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Kullanıcıyı Sil</h3>
                        <p className="text-slate-500 mb-6">Bu kullanıcıyı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.</p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirmId(null)}
                                className="flex-1 py-3 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50"
                            >
                                İptal
                            </button>
                            <button
                                onClick={confirmDeleteUser}
                                className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600"
                            >
                                Evet, Sil
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Loading overlay for user analytics */}
            {loadingUserAnalytics && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="animate-spin w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full"></div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
