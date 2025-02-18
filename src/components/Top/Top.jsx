import { Cog, Monitor, Smartphone } from "lucide-react"
import { Link } from "react-router-dom"
import articles from "../../assets/articles.jpeg"
import "./Top.scss"
import MainButton from "../mainButton/MainButton"
export default function Top() {
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
                <h2 className="header-text">المحاضرات العامة</h2>
                <span className="second-text">الأكثر مشاهدة</span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map((track, index) => (
                        <div className="top-holder rounded-t-lg">
                            <div className="box mt-2 bg-gray-50 shadow-md">
                                <img src={articles} alt="" />
                                <div to="#" className="title m-3">
                                    <Link to="#">
                                        {track.title}
                                    </Link>
                                    <Link to="/lectures" className="main-color hover:underline">
                                        <MainButton title="عرض" />
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
