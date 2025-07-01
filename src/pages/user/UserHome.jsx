import defaultProfilePicture from "../../assets/default-profile-picture.jpg"
import magic from "../../assets/magic.svg"
import favoriteButton from "../../assets/favorite-button.svg"
import generateIcon from "../../assets/generate-icon.svg"
import inputFilter from "../../assets/input-option.svg"
import { useEffect, useState } from "react"
import { Outlet, redirect, useNavigate } from "react-router-dom"
import Loading from "./components/Loading"
import axios from "axios"
import AbsurdInput from "./components/AbsurdInput"
import ResponsiveMenu from "./components/ResponsiveMenu"
import Navbar from "./components/Navbar"

const UserHome = () => {

    const [firstChat, setFirstChat] = useState(["h-100", true, "w-1/2"])
    const [filterState, setFilterState] = useState(false)
    const [user, setUser] = useState("")
    const [username, setUsername] = useState("")
    const [profilePicture, setProfilePicture] = useState("")

    const [ingredients, setIngredients] = useState("")
    const [generateResult, setGenerateResult] = useState("")
    const [isErr, setIsErr] = useState(false)
    const [errResult, setErrResult] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getUserData()
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

    const generate = async (e) => {
        e.preventDefault();
        setFirstChat(["h-min", false, "w-full"])
        try {
            setIsErr(false)
            setLoading(true)
            await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/user/generate`, {
                ingredients: ingredients
            }, { withCredentials: true })
                .then((res) => {
                    if (res.data.data.error) {
                        setIsErr(true)
                        setErrResult(res.data.data.error)
                    } else {
                        setGenerateResult(res.data.data)
                    }
                })
                .catch(() => setGenerateResult(null))
        } catch (error) {
            setGenerateResult(error.message)
        } finally {
            setLoading(false)
        }
    }

    const addFavoriteHandler = () => {
        alert("Add Favorite was Coming Soon!")
    }

    const Content = () => {
        if (!isErr) {
            if (generateResult) {
                return (
                    generateResult.map((result) => (
                        <div className="flex flex-col w-full md:w-2/5">
                            <div key={result.name} className="p-5 py-8 border-1 border-[#909090] rounded rounded-b-none flex flex-col gap-4 w-full h-full">
                                <h1 className="text-3xl font-bold">{result.nama}</h1>
                                <div className="flex gap-2 flex-wrap">
                                    {
                                        result.bahan.map((bahan) => (
                                            <p className="text-xs bg-[#D1532D] w-max h-min px-2 py-1 rounded text-white">{bahan}</p>
                                        ))
                                    }
                                </div>
                                <div className="ps-7">
                                    <ul className="list-decimal">
                                        {
                                            result.langkah.map((langkah) => (
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
        } else {
            return (
                <AbsurdInput error={errResult} />
            )
        }
    }

    return (
        <>
            <Navbar profilePicture={profilePicture} />

            {/* Chat */}
            <div className={`p-8 flex flex-col justify-center gap-5 px-10 md:px-15 items-center w-full h-100 ${firstChat[0]}`}>
                {
                    firstChat[1] && (
                        <div className="flex flex-col items-center gap-1">
                            <h1 className="text-4xl md:text-5xl font-semibold text-center">Ada Bahan Apa Hari Ini, {username}?&#127836;</h1>
                            <p className="text-center leading-4 hidden md:block">Tulis bahan-bahan masakan yang ada di rumah kamu, pisahkan setiap bahan pakai tanda koma.</p>
                        </div>
                    )
                }
                <form className="w-full md:w-1/2 flex justify-center gap-3" onSubmit={generate}>
                    <input type="text" placeholder="Tulis Bahan-bahan" className={`font-normal bg-white border-1 border-[#909090] rounded ps-4 p-2 transition-all ease-in-out delay-150 duration-1000 ${firstChat[2]} w-2/3 focus:w-full focus:outline-none`} onChange={(e) => setIngredients(e.target.value)} />
                    <button type="submit" className="bg-[#D1532D] w-10 h-10 flex justify-center items-center rounded cursor-pointer transition-all ease-in-out duration-300 active:rotate-30">
                        <img src={generateIcon} alt="Generate" className="w-4 transition-all ease-in-out duration-300" />
                    </button>
                </form>
            </div>

            {/* Chat Section */}
            <div className="px-10 md:px-15 py-8">
                {loading && (
                    <Loading />
                )}

                <div className="flex flex-col md:flex-row justify-center gap-5 flex-wrap">
                    <Content />
                </div>
            </div>
            <div>
            </div>
            <Outlet />

        </>
    )
}

export default UserHome
