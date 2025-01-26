import React, { useState, useEffect } from 'react';

function QuranPage() {
    const [surahs, setSurahs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://quranapi.pages.dev/api/surah.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setSurahs(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError('حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى لاحقًا.');
                setIsLoading(false);
            });
    }, []);

    console.log(surahs)

    const filteredSurahs = surahs.filter(surah =>
        surah.surahName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surah.surahNameTranslation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return <div className="text-center py-10">جاري التحميل...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-600">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">القرآن الكريم</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="ابحث عن سورة..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSurahs.map((surah) => (
                    <div key={surah.number} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-green-700">{surah.name}</h2>
                            <span className="text-gray-600">{surah.number}</span>
                        </div>
                        <p className="text-gray-600 mb-2">{surah.transliteration_en}</p>
                        <p className="text-sm text-gray-500 mb-2">{surah.translation_en}</p>
                        <div className="flex justify-between items-center text-sm">
                            <span>{surah.surahName}</span>
                            <span>{surah.totalAyah} آيات</span>
                        </div>
                    </div>
                ))}
            </div>

            {filteredSurahs.length === 0 && (
                <p className="text-center py-4 text-gray-600">لا توجد نتائج للبحث</p>
            )}
        </div>
    );
}

export default QuranPage;

