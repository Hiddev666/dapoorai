import girlIllustration from "../../assets/girl-illustration.svg"
import logo from "../../assets/logo.svg"
import googleIcon from "../../assets/google-icon.svg"
import eye from "../../assets/eye-svgrepo-com.svg"
import eyeOff from "../../assets/eye-off-svgrepo-com.svg"
import { useState } from "react"

const Register = () => {

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

    return (
        <>
            <div className="h-svh flex flex-col md:flex-row gap-10 md:gap-0 justify-center p-6 md:p-15">
                <div className="w-full items-center md:items-start md:w-1/2 flex flex-col gap-5">
                    <img src={logo} alt="dapoorAI Logo" className="w-30 md:w-min" />
                    <div className="flex justify-center items-end h-full w-full">
                        <img src={girlIllustration} alt="boy illustration" className="w-1/2 md:w-3/5" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center md:p-5 ">
                    <div className="px-6 py-8 border-1 border-[#909090] rounded w-full md:w-4/5 flex flex-col gap-5">
                        <div>
                            <h2 className="text-3xl font-bold">Daftar</h2>
                            <p>Hai! Mau masak apa? Daftar dulu, yok!</p>
                        </div>
                        <div>
                            <form action="" className="flex flex-col gap-2">
                                <input type="email" name="email" placeholder="Email" className="border-1 border-[#909090] w-full p-2 ps-3 rounded" />
                                <div className="relative">
                                    <input type={passwordType} name="password" placeholder="Password" className="border-1 border-[#909090] w-full p-2 ps-3 rounded" />
                                    <span className="absolute right-0 top-0 h-full mr-3 flex items-center cursor-pointer" onClick={eyeToogleHandler}>
                                        <img src={eyeToogle} alt="eye" className="w-6" />
                                    </span>
                                </div>
                                <div className="relative">
                                    <input type={passwordType} name="confirm-password" placeholder="Confirm Password" className="border-1 border-[#909090] w-full p-2 ps-3 rounded" />
                                    <span className="absolute right-0 top-0 h-full mr-3 flex items-center cursor-pointer" onClick={eyeToogleHandler}>
                                        <img src={eyeToogle} alt="eye" className="w-6" />
                                    </span>
                                </div>
                                <button type="submit" className="p-2 bg-[#D1532D] text-white font-semibold rounded cursor-pointer w-full">Daftar</button>
                            </form>
                        </div>
                        <p className="text-center text-[#808080]">Atau</p>
                        <div>
                            <button type="submit" className="p-2 bg-white border-1 border-[#909090] rounded cursor-pointer w-full flex justify-center items-center gap-2">
                                <img src={googleIcon} alt="Google" />
                                Daftar Dengan Google
                            </button>
                        </div>
                        <p className="text-center">Udah punya akun? <a href="login" className="text-[#D1532D]">Masuk</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
