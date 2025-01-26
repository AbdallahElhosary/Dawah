import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RecitersPage() {
    const [reciters, setReciters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://www.mp3quran.net/api/v3/reciters?language=ar')
            .then(response => {
                if (!response.ok) {
                    throw new Error('فشل في الاتصال بالخادم');
                }
                return response.json();
            })
            .then(data => {
                setReciters(data.reciters);
                setIsLoading(false);
            })
            .catch(error => {
                setError('حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى لاحقًا.');
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="text-center py-10">جاري التحميل...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-600">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">قائمة القراء</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reciters.map((reciter) => (
                    <Link
                        key={reciter.id}
                        to={`/reciter/${reciter.id}`}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                        <h2 className="text-xl font-semibold text-green-700 mb-2">{reciter.name}</h2>
                        <p className="text-gray-600">{reciter.rewaya}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RecitersPage;

