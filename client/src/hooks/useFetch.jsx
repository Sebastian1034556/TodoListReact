import { useEffect, useState } from "react";
import { createUser } from '../api/tasks.api';

export function useFetch(url, userData, isAuthenticated) {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); 
            try {
                const token = localStorage.getItem('token'); 
                if (!token) throw new Error('Token not found');
                const result = await createUser(userData, token, url);
                setData(result); 
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        if (isAuthenticated) {  // Condición para ejecutar
            fetchData();
        }
    }, [isAuthenticated, userData, url]);  // Dependencias

    return { data, loading, error };
}
