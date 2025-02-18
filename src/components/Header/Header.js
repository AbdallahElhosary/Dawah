import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss"
import icon from "../../assets/icon.ico"

function Header() {
    return (
        <header className="main-bg text-white ">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className='flex gap-2'>
                    <img src={icon} alt="Icon" className='w-10' />
                    <h1 className="text-2xl font-bold">صحوة</h1>
                </Link>
                <nav>
                    <ul className="flex  gap-3 text-lg">
                        <li><Link to="/" className="hover:hover-color transition duration-200">الرئيسية</Link></li>
                        <li><Link to="/quran" className="hover:text-yellow-300 transition duration-200">القرآن</Link></li>
                        <li><Link to="/reciters" className="hover:text-yellow-300 transition duration-200">القراء</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

