import logo from "../assets/logo.svg"
import arrow from "../assets/arrow.svg"
import landingIllustration from "../assets/landing-illustration.svg"
import { Navigate, useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <nav className="border-b-1 border-[#909090] py-4 px-10 md:px-30 flex justify-between w-full">
                <img src={logo} alt="Logo" className="w-26" />
                <div className="flex item-center gap-3">
                    <button className="px-5 py-1 rounded cursor-pointer">About</button>
                    <button className="bg-[#D1532D] px-5 py-1 text-white rounded cursor-pointer font-medium" onClick={() => navigate("/auth/login")}>Login</button>
                </div>
            </nav>

            <div className="w-full flex flex-col md:flex-row justify-center items-center px-10 md:px-15 md:py-15 gap-10 h-130">
                <div className="hidden md:flex justify-center items-center">
                    <img src={landingIllustration} alt="" className="w-full" />
                </div>
                <div className="flex justify-start items-start">
                    <div className="flex flex-col items-start md:items-start gap-4">
                        <div className="flex flex-col items-start md:items-start text-start gap-2">
                            <p className="text-base md:text-lg text-[#808080]">Made With Love By <a href="https://instagram.com/hiddev__" className="font-bold">Hiddev</a></p>
                            <div className="flex flex-col items-start md:items-start text-start">
                                <h1 className="text-5xl md:text-6xl font-semibold">Masak Apapun,</h1>
                                <h1 className="text-5xl md:text-6xl font-semibold">Pakai Bahan Apapun🍳</h1>
                            </div>
                            <p className="text-base md:text-lg">Platform Generator Resep Berbasis AI</p>
                        </div>
                        <button onClick={() => navigate("/auth/login")} className="bg-[#D1532D] px-6 py-2 md:py-3 text-white rounded cursor-pointer font-medium w-full md:w-max transition-all delay-150 duration-300 hover:px-10 flex justify-center gap-5">Mulai Di Sini, Yuk! <img src={arrow} className="w-5" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
