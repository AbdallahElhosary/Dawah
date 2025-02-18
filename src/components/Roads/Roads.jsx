import { Cog, Monitor, Smartphone } from "lucide-react"
import { Link } from "react-router-dom"
import "./Roads.scss"

export default function Roads() {
    const tracks = [
        {
            title: "مسار العقيدة",

            icon: <Monitor className="w-16 h-16 text-blue-500" />,
        },
        {
            title: "مسار التفسير",

            icon: <Smartphone className="w-16 h-16 text-blue-500" />,
        },
        {
            title: "مسار الفقه",
            icon: <Cog className="w-16 h-16 text-blue-500" />,
        },
    ]

    return (
        <div className='px-4 py-8 bg-gray-50'>
            <section className="bg-gray-50 p-6 flex-grow container mx-auto">
            <h2 className="header-text">المسارات التعليمية</h2>
            <span className="second-text">ما لا يسع المسلم جهله</span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                    <div className="tracks-holder border-4 border-red-600">
                        <div className="track mt-2 px-4 p-5 text-center bg-white border-4 border-indigo-500/100 shadow-md"> 
                            <img src="https://elzero.org/wp-content/themes/elzero/imgs/_fundamentals.png" alt="" />                            
                            <Link to="#" className="hover:main-bg title">
                                {track.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            </section>
            </div>
    )
}
