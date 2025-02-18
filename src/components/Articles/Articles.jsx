import React from 'react'
import { Link } from 'react-router-dom';
import MainButton from '../mainButton/MainButton';
import articleImg from "../../assets/articles.jpeg"
import "./Articles.scss"

const Articles = () => {

    const articles= [{},{},{}]
    return (
        <div className='px-4 py-8'>
            <section className=" p-6 flex-grow container mx-auto">
                <h2 className="header-text">المقالات العشوائية</h2>
                <span className="second-text">مقالات عشوائية من جميع الأقسام</span>
                <section className="articles-holder grid grid-cols-1 md:grid-cols-3 gap-6 my-4">

                        {
                            articles.map((art) => {
                                return (
                                    
                                <div className="article mt-2  text-center bg-white border-4 border-indigo-500/100 shadow-md">
                                    <img src={articleImg} alt="" />
                                    <Link to="#" className="hover:main-bg title">
                                        من هم السلفية
                                    </Link>
                                </div>
                                )
                            })
                        }
                    
                    
                </section>
            </section>

        </div>
    )
}

export default Articles
