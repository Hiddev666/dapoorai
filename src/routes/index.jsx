import { createBrowserRouter } from "react-router-dom";
import Favorite from "../pages/favorite";
import Home from "../pages/home";
import Login from "../pages/auth/Login";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/auth/Register";

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
            { index: true, element: <Login /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ]
    },
    {
        path: "/u",
        element: <MainLayout />,
        children: [
            { index: true, element: <Login /> },
            { path: "login", element: <Login /> }
        ]
    }
])

export default router
