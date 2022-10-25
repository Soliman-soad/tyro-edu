import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import About from "../pages/About";
import Login from "../pages/authenticationPages/Login";
import Register from "../pages/authenticationPages/Register";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Faq from "../pages/Faq";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/courses',
                element:<Courses/>
            },
            {
                path:'faq',
                element:<Faq/>
            },
            {
                path:'blog',
                element:<Blog/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            }
        ]
    }
])
export default router;