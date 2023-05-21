import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Blog from "../Pages/Blog/Blog";
import MyTos from "../Pages/MyToys/MyTos";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/addtoys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyTos></MyTos></PrivateRoute>
            },
            {
                path: '/toydetails/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-toy-marketplace-server.vercel.app/toy/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;