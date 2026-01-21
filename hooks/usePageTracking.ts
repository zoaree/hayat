import { useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';

const API_URL = 'https://hayatapi.abdulkadirunsal.com.tr/api';

export const usePageTracking = (currentPage: string) => {
    const { token, isAuthenticated } = useAuth();
    const lastPageRef = useRef<string | null>(null);
    const pageStartTimeRef = useRef<number>(Date.now());
    const heartbeatIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Track page change
    useEffect(() => {
        if (!isAuthenticated || !token) return;

        const trackPageVisit = async () => {
            // Calculate time spent on previous page
            const timeSpent = Math.round((Date.now() - pageStartTimeRef.current) / 1000);

            // Send previous page data if exists
            if (lastPageRef.current && timeSpent > 0) {
                try {
                    await fetch(`${API_URL}/track/page`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                        body: JSON.stringify({
                            page_path: lastPageRef.current,
                            duration_seconds: timeSpent,
                        }),
                    });
                } catch (error) {
                    console.error('Failed to track page:', error);
                }
            }

            // Reset for new page
            lastPageRef.current = currentPage;
            pageStartTimeRef.current = Date.now();
        };

        trackPageVisit();
    }, [currentPage, isAuthenticated, token]);

    // Heartbeat for session duration (every 1 minute)
    useEffect(() => {
        if (!isAuthenticated || !token) return;

        const sendHeartbeat = async () => {
            try {
                await fetch(`${API_URL}/track/heartbeat`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({ minutes: 1 }),
                });
            } catch (error) {
                console.error('Heartbeat failed:', error);
            }
        };

        // Start heartbeat interval
        heartbeatIntervalRef.current = setInterval(sendHeartbeat, 60000); // Every 1 minute

        return () => {
            if (heartbeatIntervalRef.current) {
                clearInterval(heartbeatIntervalRef.current);
            }
        };
    }, [isAuthenticated, token]);

    // Track when user leaves page (unload)
    useEffect(() => {
        if (!isAuthenticated || !token) return;

        const handleBeforeUnload = () => {
            const timeSpent = Math.round((Date.now() - pageStartTimeRef.current) / 1000);

            if (lastPageRef.current && timeSpent > 0) {
                // Use sendBeacon for reliable tracking on page unload
                const data = JSON.stringify({
                    page_path: lastPageRef.current,
                    duration_seconds: timeSpent,
                });

                navigator.sendBeacon(
                    `${API_URL}/track/page`,
                    new Blob([data], { type: 'application/json' })
                );
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isAuthenticated, token]);
};
