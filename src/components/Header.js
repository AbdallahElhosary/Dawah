import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-green-700 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-2xl font-bold">الموقع الإسلامي</h1>
                </Link>
                <nav>
                    <ul className="flex  gap-3 text-lg">
                        <li><Link to="/" className="hover:text-yellow-300 transition duration-200">الرئيسية</Link></li>
                        <li><Link to="/quran" className="hover:text-yellow-300 transition duration-200">القرآن</Link></li>
                        <li><Link to="/reciters" className="hover:text-yellow-300 transition duration-200">القراء</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

