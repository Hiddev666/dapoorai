import logo from "../../assets/logo.svg"
import defaultProfilePicture from "../../assets/default-profile-picture.jpg"
import favorite from "../../assets/favorite.svg"
import generateIcon from "../../assets/generate-icon.svg"
import inputFilter from "../../assets/input-option.svg"
import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"

const UserHome = () => {

    const [firstChat, setFirstChat] = useState(true)
    const [popupState, setPopupState] = useState(false)
    const [filterState, setFilterState] = useState(false)
    const navigate = useNavigate()

    const BottomChat = () => {
        return (
            <div className="pb-8 flex justify-center items-center fixed bottom-0 w-full">
                <div className="w-5/6 md:w-1/2 flex justify-center gap-3">
                    <input type="text" className="bg-white border-1 border-[#909090] rounded ps-4 p-2 w-full" />
                    <button className="bg-[#D1532D] w-10 h-10 flex justify-center items-center rounded cursor-pointer">
                        <img src={generateIcon} alt="Generate" className="w-5" />
                    </button>
                </div>
            </div>
        )
    }

    const CenterChat = () => {
        return (
            <div className="w-full flex justify-center items-center h-150">
                <div className="text-center flex flex-col items-center gap-6">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-semibold">Ada Bahan Apa Hari Ini, Wahid?</h1>
                        <p className="text-sm md:text-base">Tulis bahan-bahan masakan yang kamu punya!</p>
                    </div>
                    <div className="w-full flex justify-center gap-3">
                        <div className="flex justify-center items-center w-full relative">
                            <input type="text" className="bg-white border-1 border-[#909090] rounded ps-4 p-2 w-full" />
                            <button
                                className="absolute right-0 bg-[#505050] border-1 border-[#505050] w-10 h-10 flex justify-center items-center rounded-e cursor-pointer"
                                onClick={FilterPopupHandler}
                            >
                                <img src={inputFilter} alt="Generate" className="w-1" />
                            </button>
                            {filterState && (
                                <FilterPopup />
                            )}
                        </div>
                        <button className="bg-[#D1532D] size-10 p-1 flex justify-center items-center rounded cursor-pointer" onClick={() => setFirstChat(false)}>
                            <img src={generateIcon} alt="Generate" className="w-1/2" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const FilterPopup = () => {
        return (
            <div className="absolute border-1 border-[#505050] p-3 right-0 top-12 bg-gray-100 rounded w-1/2">
                <input type="number" placeholder="Jumlah Resep" className="w-" />
            </div>
        )
    }

    const FirstChatHandler = () => {
        if (firstChat) {
            return <CenterChat />
        } else {
            return <BottomChat />
        }
    }

    const ProfilePopupHandler = () => {
        if (popupState != false) {
            setPopupState(false)
        } else {
            setPopupState(true)
        }
    }

    const FilterPopupHandler = () => {
        if (filterState != false) {
            setFilterState(false)
        } else {
            setFilterState(true)
        }
    }

    return (
        <>
            <nav className="border-b-1 border-[#909090] py-4 px-10 md:px-15 flex justify-between fixed w-full">
                <img src={logo} alt="Logo" className="w-26" />
                <div className="flex gap-5">
                    <div className="flex gap-2 items-center">
                        <img src={favorite} alt="Fav" className="h-min" />
                        <p>Resep Favorit</p>
                    </div>
                    <div onClick={ProfilePopupHandler} className="relative cursor-pointer">
                        <img src={defaultProfilePicture} alt="User" className="w-9 border-1 border-[#eaeaea] rounded-full" />
                        {popupState && (
                            <div className="bg-white border-1 border-[#909090] rounded px-4 py-2 absolute right-0">
                                <p onClick={() => navigate("/")}>Logout</p>
                            </div>
                        )}
                    </div>
                </div>

            </nav>

            {/* Chat Section */}
            <FirstChatHandler />
            {/* <CenterChat /> */}
        </>
    )
}

export default UserHome
