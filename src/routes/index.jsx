import { createBrowserRouter } from "react-router-dom";
import Favorite from "../pages/favorite";
import Home from "../pages/home";
import Login from "../pages/auth/Login";
import MainLayout from "../layout/MainLayout";
import UserHome from "../pages/user/UserHome";
import Histories from "../pages/user/Histories";
import UserLayout from "../pages/user/UserLayout";
import History from "../pages/user/History";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, element: <Home /> },
        ]
    },
    {
        path: "/auth",
        // element: <MainLayout />,
        children: [
            { path: "login", element: <Login /> },
        ]
    },
    {
        path: "/user",
        element: <UserLayout />,
        children: [
            { index: true, element: <UserHome /> },
            { path: "histories", element: <Histories /> },
            { path: "histories/:id", element: <History /> },
        ]
    }
])

export default router
