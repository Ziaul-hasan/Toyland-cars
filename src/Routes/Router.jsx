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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <AddToys></AddToys>
            },
            {
                path: '/mytoys',
                element: <MyTos></MyTos>
            },
            {
                path: '/toydetails/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
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