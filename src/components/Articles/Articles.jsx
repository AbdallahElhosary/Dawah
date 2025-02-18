// import React from 'react'
// import { Link } from 'react-router-dom';
// import MainButton from '../mainButton/MainButton';
// import articleImg from "../../assets/articles.jpeg"
// import "./Articles.scss"

// const Articles = () => {

//     const articles = [{}, {}, {}]
//     return (
//         <div className='px-4 py-8'>
//             <section className=" p-6 flex-grow container mx-auto">
//                 <h2 className="header-text">المقالات العشوائية</h2>
//                 <span className="second-text">مقالات عشوائية من جميع الأقسام</span>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//                     {
//                         articles.map((art) => {
//                             return (
//                                 <div className="article-holder border-4 border-red-600">
//                                     <div className="article mt-2  text-center bg-white border-4 border-indigo-500/100 shadow-md"> 
//                                         <img src={articleImg} alt="" />
//                                         <Link to="#" className=" title">
//                                             من هم السلفية
//                                         </Link>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     }


//                 </div>
//             </section>

//         </div>
//     )
// }

// export default Articles


import { Cog, Monitor, Smartphone } from "lucide-react"
import { Link } from "react-router-dom"
import articles from "../../assets/articles.jpeg"
import "./Articles.scss"


export default function Articles() {
    const tracks = [
        {
            title: "السلفية لماذا",

            icon: <Monitor className="w-16 h-16 text-blue-500" />,
        },
        {
            title: "هيا بنا نؤمن ساعة",

            icon: <Smartphone className="w-16 h-16 text-blue-500" />,
        },
        {
            title: "اتقي الله حيثما كنت",
            icon: <Cog className="w-16 h-16 text-blue-500" />,
        },
    ]

    return (
        <div className='px-4 py-8'>
            <section className="p-6 flex-grow container mx-auto">
                <h2 className="header-text">المقالات العشوائية</h2>
                 <span className="second-text">مقالات عشوائية من جميع الأقسام</span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track, index) => (
                        <div className="top-holder">
                            <div className="box mt-2 bg-gray-50 shadow-md">
                                <img src={articles} alt="" />
                                <div to="#" className="title m-3 mx-auto">
                                    <Link to="#">
                                        {track.title}
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
