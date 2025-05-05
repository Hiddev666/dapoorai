import logo from "../../assets/logo.svg"
import defaultProfilePicture from "../../assets/default-profile-picture.jpg"

const UserHome = () => {
    return (
        <>
            <nav className="border-b-1 border-[#909090] py-5 px-15 flex justify-between">
                <img src={logo} alt="Logo" className="w-30" />
                <div>
                    <div>
                        <img src={defaultProfilePicture} alt="User" className="w-9 border-1 border-[#eaeaea] rounded-full" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UserHome
