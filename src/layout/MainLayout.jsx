import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Outlet />
            <div className="flex justify-center items-center">
                <p>Made with &#128420; by Hiddev</p>
            </div>
        </>
    )
}

export default MainLayout
