import boyIllustration from "../../assets/boy-illustration.svg"
import logo from "../../assets/logo.svg"
import googleIcon from "../../assets/google-icon.svg"

const Login = () => {
    return (
        <>
            <div className="h-svh flex flex-col md:flex-row gap-10 md:gap-0 justify-center p-6 md:p-15">
                <div className="w-full items-center md:items-start md:w-1/2 flex flex-col gap-5">
                    <img src={logo} alt="dapoorAI Logo" className="w-30 md:w-min" />
                    <div className="flex justify-center items-end h-full w-full">
                        <img src={boyIllustration} alt="boy illustration" className="w-1/2 md:w-3/5" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center md:p-5 ">
                    <div className="px-6 py-8 border-1 border-[#909090] rounded w-full md:w-4/5 flex flex-col gap-5">
                        <div>
                            <h2 className="text-3xl font-bold">Masuk</h2>
                            <p>Hai! Seneng liat kamu lagi! Masak apa hari ini?</p>
                        </div>
                        <div>
                            <form action="" className="flex flex-col gap-2">
                                <input type="email" name="email" placeholder="Email" className="border-1 border-[#909090] w-full p-2 ps-3 rounded" />
                                <input type="password" name="password" placeholder="Password" className="border-1 border-[#909090] w-full p-2 ps-3 rounded" />
                                <button type="submit" className="p-2 bg-[#D1532D] text-white font-semibold rounded cursor-pointer w-full">Masuk</button>
                            </form>
                        </div>
                        <p className="text-center text-[#808080]">Atau</p>
                        <div>
                            <button type="submit" className="p-2 bg-white border-1 border-[#909090] rounded cursor-pointer w-full flex justify-center items-center gap-2">
                                <img src={googleIcon} alt="Google" />
                                Masuk Dengan Google
                            </button>
                        </div>
                        <p className="text-center">Belum punya akun? <a href="register" className="text-[#D1532D]">Daftar</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
