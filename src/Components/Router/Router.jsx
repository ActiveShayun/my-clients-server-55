import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import Users from "../Users";
import UpdateInfo from "./UpdateInfo";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/users",
                element: <Users />,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: "/update/:id",
                element: <UpdateInfo/>,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]


    }
])

export default router