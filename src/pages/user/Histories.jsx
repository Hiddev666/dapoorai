import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import dateFormat, { masks } from "dateformat"
import searchIcon from "../../assets/search-icon.svg"


const Histories = () => {
    const [user, setUser] = useState("")
    const [username, setUsername] = useState("")
    const [profilePicture, setProfilePicture] = useState("")

    const [histories, setHistories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getUserData()
        getHistories()
    }, [])

    const getUserData = async () => {
        await axios.get("http://localhost:8000/user", { withCredentials: true })
            .then((res) => {
                setUser(res.data.data)
                let name = res.data.data.name
                setUsername(name.split(" ")[0])
                setProfilePicture(res.data.data.profile_picture)
            })
            .catch(() => {
                setUser(null)
                navigate("/auth/login")
            })
    }

    const getHistories = async () => {
        await axios.get("http://localhost:8000/user/histories", { withCredentials: true })
            .then((res) => {
                setHistories(res.data.data)
            })
            .catch(() => {
                setHistories(null)
            })
    }

    const Histories = () => {
        console.log(histories)
        if (histories != null) {
            return (
                histories.map((history) => (
                    <div className="border-1 border-gray-300 rounded p-3 w-3/7 cursor-pointer hover:bg-gray-100" key={history.id} onClick={() => navigate(`/user/histories/${history.id}`)}>
                        <h1 className="text-xl font-bold">{history.ingredients}</h1>
                        <h1 className="text-sm">{dateFormat(history.created_at, "mmmm dS, yyyy")}</h1>
                    </div>
                ))
            )
        }
    }

    return (
        <>
            <Navbar profilePicture={profilePicture} />
            <div className="py-4 px-10 md:px-30 flex flex-col items-center gap-10 mt-5">
                <div className="w-full flex justify-center item-center gap-2">
                    <input type="text" className="font-normal bg-white border-1 border-[#909090] rounded ps-4 p-2 transition-all ease-in-out delay-150 duration-1000 w-1/2 focus:outline-none" placeholder="Cari histori resep"/>
                    <button className="bg-[#D1532D] w-10 h-10 flex justify-center items-center rounded cursor-pointer transition-all ease-in-out duration-300">
                        <img src={searchIcon} alt="" />
                    </button>
                </div>
                <div className="flex justify-center flex-wrap gap-3">
                    <Histories />
                </div>
            </div>
        </>
    )
}

export default Histories
