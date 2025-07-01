import logo from "../../../assets/logo.svg"
import favorite from "../../../assets/favorite.svg"
import history from "../../../assets/history-icon.svg"
import ResponsiveMenu from "./ResponsiveMenu"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navbar = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [popupState, setPopupState] = useState(false)

    const ProfilePopupHandler = () => {
        if (popupState != false) {
            setPopupState(false)
        } else {
            setPopupState(true)
        }
    }

    const logoutHandler = () => {
        window.location.href = `${process.env.API_ENDPOINT}/auth/logout`
    }

    return (
        <nav className="border-b-1 border-[#909090] py-4 px-10 md:px-30 flex justify-between items-center w-full">
            <img src={logo} alt="Logo" className="w-26 cursor-pointer" onClick={() => {
                location.pathname != "/user" ? navigate("/user") : navigate(0)
            }} />
            <ResponsiveMenu profilePicture={props.profilePicture} />
            <div className="hidden md:flex gap-8">
                <div className="flex gap-2 items-center cursor-pointer transition-all delay-150 duration-300 hover:border-1 hover:px-3 rounded">
                    <img src={favorite} alt="Fav" className="h-min" />
                    <p>Resep Favorit</p>
                </div>
                <div className="flex gap-2 items-center cursor-pointer transition-all delay-300 duration-300 hover:border-1 hover:px-3 rounded" onClick={() => navigate("/user/histories")}>
                    <img src={history} alt="Fav" className="h-min" />
                    <p>History</p>
                </div>
                <div onMouseEnter={ProfilePopupHandler} className="relative cursor-pointer">
                    <img src={props.profilePicture} alt="User" className="w-9 border-1 border-[#eaeaea] rounded-full" />
                    {popupState && (
                        <div className="bg-white border-1 border-[#909090] rounded px-4 py-2 absolute right-0">
                            <p onClick={logoutHandler}>Logout</p>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
