import boyIllustration from "../../assets/boy-illustration.svg"
import logo from "../../assets/logo.svg"
import googleIcon from "../../assets/google-icon.svg"
import eye from "../../assets/eye-svgrepo-com.svg"
import eyeOff from "../../assets/eye-off-svgrepo-com.svg"
import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()
    const [eyeToogle, setEyeToogle] = useState(eye)
    const [passwordType, setPasswordType] = useState("password")

    const eyeToogleHandler = () => {
        if (eyeToogle != eye) {
            setEyeToogle(eye)
            setPasswordType("password")
        } else {
            setEyeToogle(eyeOff)
            setPasswordType("text")
        }
    }

    const loginGoogleHandler = () => {
        window.location.href = `${import.meta.env.API_ENDPOINT}/auth/google`
    }

    return (
        <>
            <div className="h-svh flex flex-col md:flex-row gap-10 md:gap-0 justify-center p-10 md:p-15">
                <div className="w-full md:w-1/2 flex justify-center items-center md:p-5 ">
                    <div className="px-6 py-8 border-1 border-[#909090] border-b-3 rounded w-full md:w-4/5 flex flex-col gap-5 transition-all ease-in-out">
                        <div>
                            <img src={logo} alt="DapoorAI Logo" className="w-35" />
                            <p>Hai, Selamat Datang di DapoorAI! Masuk Dulu Yuk!</p>
                        </div>
                        <div>
                            <button className="p-2 bg-white border-1 border-[#909090] rounded cursor-pointer w-full flex justify-center items-center gap-2 transition-all ease-in-out hover:border-b-3 hover:-translate-y-1" onClick={loginGoogleHandler}>
                                <img src={googleIcon} alt="Google" />
                                Masuk Dengan Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
