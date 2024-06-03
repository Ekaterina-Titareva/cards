import { useState, useEffect } from 'react';

const useFetchData = (url) => {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setData(data);
        setLoading(false);
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);
        setError(error);
        setLoading(false);
    });
}, []);

return { data, loading, error };
};

export default useFetchData;