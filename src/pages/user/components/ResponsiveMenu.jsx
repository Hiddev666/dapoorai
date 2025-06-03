import { useState } from "react"
import menu from "../../../assets/menu.svg"
import favorite from "../../../assets/favorite.svg"
import history from "../../../assets/history-icon.svg"

const ResponsiveMenu = (props) => {

    const [showMenu, setShowMenu] = useState(false)

    const showMenuHandler = () => {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }

    return (
        <div className="md:hidden relative">
            <img src={menu} alt="Fav" className="h-min cursor-pointer" onClick={showMenuHandler} />
            {
                showMenu && (
                    <div className="px-5 py-3 border-1 absolute right-0 top-8 bg-white rounded w-max flex flex-col gap-3">
                        <div className="flex gap-2 items-center justify-center cursor-pointer">
                            <img src={props.profilePicture} alt="User" className="w-2/3 border-1 border-[#eaeaea] rounded-full" />
                        </div>
                        <div>
                            <div className="flex gap-2 items-center cursor-pointer transition-all delay-150 duration-300 hover:py-3 rounded w-full p-1">
                                <img src={favorite} alt="Fav" className="h-min" />
                                <p>Resep Favorit</p>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer transition-all delay-300 duration-300 hover:py-3 rounded w-full p-1">
                                <img src={history} alt="Fav" className="h-min" />
                                <p>History</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-center cursor-pointer transition-all delay-300 duration-300 hover:py-3 rounded w-full p-1 bg-[#D1532D] text-white font-semibold">
                            <p>Logout</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ResponsiveMenu
