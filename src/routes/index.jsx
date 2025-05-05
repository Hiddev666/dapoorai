import { createBrowserRouter } from "react-router-dom";
import Favorite from "../pages/favorite";
import Home from "../pages/home";
import Login from "../pages/auth/Login";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/auth/Register";
import UserHome from "../pages/user/UserHome";

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
            { path: "register", element: <Register /> },
        ]
    },
    {
        path: "/user",
        children: [
            { index: true, element: <UserHome /> },
        ]
    }
])

export default router
