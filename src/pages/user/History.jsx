import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

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

    const getHistory = async () => {
        await axios.get(`http://localhost:8000/user/histories/${id}`, { withCredentials: true })
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
                    <p>{recipe.nama}</p>
                ))
            )
        }
    }

    return (
        <>
            <Navbar profilePicture={profilePicture} />
            <History />
        </>
    )
}

export default History
