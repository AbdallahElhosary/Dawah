import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import "./Style.scss"


const TitleDate = () => {

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const date = new Date(Date.now()).toLocaleDateString('ar-EG', options);



    return (
        <div className='bg-gray-50 flex justify-between px-5 py-1'>
            <div className='social-links flex items-center gap-2 text-lg'>
                <Link to="https://www.facebook.com/profile.php?id=61565174322987" target='_blank'>
                    <FaFacebook />
                </Link>

                <Link to={`https://wa.me/+201014976934`} target='_blank'>
                    <FaWhatsapp />
                </Link>
            </div>
            <div>
                {date}
            </div>
        </div>
    )
}

export default TitleDate
