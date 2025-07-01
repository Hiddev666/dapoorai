import { Outlet } from "react-router-dom"
import dotenv from "dotenv"
dotenv.config()

const UserLayout = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default UserLayout
