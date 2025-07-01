import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import favoriteButton from "../../assets/favorite-button.svg"
import dotenv from "dotenv"
dotenv.config()

const History = () => {

    const [user, setUser] = useState("")
    const [username, setUsername] = useState("")
    const [profilePicture, setProfilePicture] = useState("")

    const [histories, setHistories] = useState([])
    const [recipes, setRecipes] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getUserData()
        getHistory()
    }, [])

    const getUserData = async () => {
        await axios.get(`${process.env.API_ENDPOINT}/user`, { withCredentials: true })
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

    const getHistory = async () => {
        await axios.get(`${process.env.API_ENDPOINT}/user/histories/${id}`, { withCredentials: true })
            .then((res) => {
                setHistories(res.data.data)
                setRecipes(res.data.data.recipe)
            })
            .catch(() => {
                setHistories(null)
            })
    }

    const History = () => {
        if (histories != null) {
            return (
                recipes.map((recipe) => (
                    <div className="flex flex-col w-full md:w-2/5">
                        <div key={recipe.name} className="p-5 py-8 border-1 border-[#909090] rounded rounded-b-none flex flex-col gap-4 w-full h-full">
                            <h1 className="text-3xl font-bold">{recipe.nama}</h1>
                            <div className="flex gap-2 flex-wrap">
                                {
                                    recipe.bahan.map((bahan) => (
                                        <p className="text-xs bg-[#D1532D] w-max h-min px-2 py-1 rounded text-white">{bahan}</p>
                                    ))
                                }
                            </div>
                            <div className="ps-7">
                                <ul className="list-decimal">
                                    {
                                        recipe.langkah.map((langkah) => (
                                            <li className="text-sm mb-1">{langkah}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="px-8 py-3 text-sm border-1 border-t-0 border-[#909090] bg-[#EAEAEA] rounded-b flex gap-2">
                            <img src={favoriteButton} alt="Fav" className="h-min cursor-pointer transition-all hover:scale-130" onClick={addFavoriteHandler} />
                            <p>Tambahkan Ke Favorit</p>
                        </div>
                    </div>
                ))
            )
        }
    }

    const addFavoriteHandler = () => {
        alert("Add Favorite was Coming Soon!")
    }

    return (
        <>
            <Navbar profilePicture={profilePicture} />
            <div className="flex flex-col md:flex-row justify-center gap-5 flex-wrap py-8">
                <History />
            </div>
        </>
    )
}

export default History
