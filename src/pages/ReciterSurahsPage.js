import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ReciterSurahsPage() {
    const { reciterId } = useParams();
    const [reciter, setReciter] = useState(null);
    const [surahs, setSurahs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [audioSrc, setAudioSrc] = useState('');

    useEffect(() => {
        Promise.all([
            fetch('https://www.mp3quran.net/api/v3/reciters?language=ar'),
            fetch('https://quranapi.pages.dev/api/surah.json')
        ])
            .then(([recitersResponse, surahsResponse]) =>
                Promise.all([recitersResponse.json(), surahsResponse.json()])
            )
            .then(([recitersData, surahsData]) => {
                const selectedReciter = recitersData.reciters.find(r => r.id === parseInt(reciterId));
                if (!selectedReciter) {
                    throw new Error('لم يتم العثور على القارئ');
                }
                setReciter(selectedReciter);
                setSurahs(surahsData);
                setIsLoading(false);
            })
            .catch(error => {
                setError('حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى لاحقًا.');
                setIsLoading(false);
            });
    }, [reciterId]);

    // console.log(recitxer)
    


    const playSurah = (surahNumber) => {
        if (reciter) {
            console.log(surahNumber)
            const paddedSurahNumber = surahNumber.toString().padStart(3, '0');
            const audioUrl = `${reciter.moshaf[0].server}${paddedSurahNumber}.mp3`;
            setAudioSrc(audioUrl);
        }
    };

    if (isLoading) {
        return <div className="text-center py-10">جاري التحميل...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-600">{error}</div>;
    }

    console.log(audioSrc)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
                سور القرآن بصوت {reciter?.name}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {surahs.map((surah) => (
                    <div
                        
                        key={surah.number}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                        onClick={() => playSurah(surahs.indexOf(surah))}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-semibold text-green-700">{surah.surahName}</h2>
                            <span className="text-gray-600">{surah.number}</span>
                        </div>
                        <p className="text-gray-600 mb-2">{surah.surahNameTranslation}</p>
                        <p className="text-sm text-gray-500">{surah.totalAyah} آيات</p>
                    </div>
                ))}
            </div>
            {audioSrc && (
                <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
                    <audio controls autoPlay className="w-full">
                        <source src={audioSrc} type="audio/mpeg" />
                        متصفحك لا يدعم تشغيل الصوت.
                    </audio>
                </div>
            )}
        </div>
    );
}

export default ReciterSurahsPage;

