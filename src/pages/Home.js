import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Mic, Headphones, BookOpen } from 'lucide-react';

function Home() {
    return (
        <div>
            <section className="mb-8">
                <div className="flex justify-center mb-4">
                    <div className="relative w-full max-w-xl">
                        <input
                            type="search"
                            placeholder="ابحث عن محاضرات، تسجيلات صوتية، أو آيات"
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a5d1a]"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#1a5d1a]">المحتوى المميز</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold mb-2">محاضرة جديدة</h3>
                        <p>عنوان المحاضرة الجديدة هنا</p>
                        <button className="mt-2 bg-[#1a5d1a] text-white px-4 py-2 rounded hover:bg-[#154a15]">استمع الآن</button>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold mb-2">تلاوة القرآن</h3>
                        <p>سورة البقرة - الشيخ عبد الباسط عبد الصمد</p>
                        <button className="mt-2 bg-[#1a5d1a] text-white px-4 py-2 rounded hover:bg-[#154a15]">استمع الآن</button>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-bold mb-2">درس في التفسير</h3>
                        <p>تفسير سورة الكهف - الجزء الأول</p>
                        <button className="mt-2 bg-[#1a5d1a] text-white px-4 py-2 rounded hover:bg-[#154a15]">شاهد الآن</button>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4 flex items-center text-[#1a5d1a]">
                        <Mic className="mr-2" />
                        أحدث المحاضرات
                    </h2>
                    <ul className="space-y-2">
                        <li><Link to="#" className="hover:text-[#1a5d1a]">فضل الصدقة في الإسلام</Link></li>
                        <li><Link to="#" className="hover:text-[#1a5d1a]">أهمية الصلاة في حياة المسلم</Link></li>
                        <li><Link to="#" className="hover:text-[#1a5d1a]">التوكل على الله في الشدائد</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4 flex items-center text-[#1a5d1a]">
                        <Headphones className="mr-2" />
                        التسجيلات الصوتية
                    </h2>
                    <ul className="space-y-2">
                        <li><Link to="#" className="hover:text-[#1a5d1a]">تلاوات مختارة - سورة يس</Link></li>
                        <li><Link to="#" className="hover:text-[#1a5d1a]">دروس في السيرة النبوية</Link></li>
                        <li><Link to="#" className="hover:text-[#1a5d1a]">أذكار الصباح والمساء</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4 flex items-center text-[#1a5d1a]">
                        <BookOpen className="mr-2" />
                        القرآن الكريم
                    </h2>
                    <ul className="space-y-2">
                        <li><Link to="#" className="hover:text-[#1a5d1a]">سورة البقرة</Link></li>
                        <li><Link to="#" className="hover:text-[#1a5d1a]">سورة آل عمران</Link></li>
                        <li><Link to="#" className="hover:text-[#1a5d1a]">سورة النساء</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Home;

