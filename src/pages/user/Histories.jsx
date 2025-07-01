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
        await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/user`, { withCredentials: true })
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
        await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/user/histories`, { withCredentials: true })
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
                histories.map((history) => {
                    let ingredients = history.ingredients
                    return (
                        <div className="w-full md:w-3/7">
                            <div div className="border-1 border-[#909090] border-b-0 rounded rounded-b-none p-3 w-full cursor-pointer hover:bg-gray-100" key={history.id} onClick={() => navigate(`/user/histories/${history.id}`)}>
                                <h1 className="text-xl font-bold">{ingredients.substr(0, 40)}...</h1>
                            </div>
                            <div className="px-3 py-1 text-sm border-1  border-[#909090] bg-[#EAEAEA] rounded-b flex gap-2">
                                <h1 className="text-sm">{dateFormat(history.created_at, "mmmm dS, yyyy")}</h1>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <>
            <Navbar profilePicture={profilePicture} />
            <div className="py-4 px-10 md:px-30 flex flex-col items-center gap-10 mt-5">
                <div className="flex justify-center flex-col  md:flex-row flex-wrap gap-3 ">
                    <Histories />
                </div>
            </div>
        </>
    )
}

export default Histories
