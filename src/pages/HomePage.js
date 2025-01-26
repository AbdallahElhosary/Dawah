import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../components/mainButton/MainButton';
import Hero from '../components/Hero/Hero';

function HomePage() {
    return (
        <div className="">
            <Hero />

            <div>
                {/* Search Input */}
                <div className="relative max-w-md ">
                    <input
                        type="search"
                        placeholder="ابحث عن محتوى..."
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
        {/* lectures  */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">

                    <div className="bg-white p-6 rounded-lg shadow-md  flex flex-col justify-between">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">المحاضرات</h3>
                            <p className="text-gray-600 mb-4">استمع إلى أحدث المحاضرات الإسلامية من علماء مرموقين.</p>
                        </div>
                        <Link to="/lectures" className="text-green-700 hover:underline">
                            <MainButton title="عرض" />
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md  flex flex-col justify-between">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">التسجيلات الصوتية</h3>
                            <p className="text-gray-600 mb-4">استمع إلى مجموعة متنوعة من التسجيلات الصوتية الإسلامية.</p>
                        </div>
                        <Link to="/audio" className="text-green-700 hover:underline">
                            <MainButton title="عرض" />
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <h3 className="text-xl font-semibold mb-2">القرآن الكريم</h3>
                            <p className="text-gray-600 mb-4">اقرأ واستمع إلى القرآن الكريم مع التفاسير.</p>
                        </div>
                        <Link to="/quran" className="text-green-700 hover:underline">
                            <MainButton title="عرض" />
                        </Link>
                    </div>
                </section>
                    {/* New News */}
                <section>
                    <h2 className="text-2xl font-bold text-green-700 my-4">أحدث المحتويات</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-semibold mb-2">عنوان المحتوى {item}</h3>
                                <p className="text-gray-600 text-sm mb-2">وصف قصير للمحتوى...</p>
                                <Link to="#" className="text-green-700 hover:underline">
                                    <MainButton title="اقرأ المزيد" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            
        </div>
    );
}

export default HomePage;

