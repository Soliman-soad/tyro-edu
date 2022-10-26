import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Login from "../pages/authenticationPages/Login";
import Register from "../pages/authenticationPages/Register";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Course from "../pages/coursesPage/Course";
import Dashboard from "../pages/coursesPage/Dashboard";
import Profile from "../pages/coursesPage/Profile";
import SingleCourse from "../pages/coursesPage/SingleCourse";
import ErrorPage from "../pages/error/ErrorPage";
import Faq from "../pages/Faq";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: () =>fetch('https://tyro-server.vercel.app/courses')
            },
            {
                path:'/courses',
                element:<Courses/>,
                
                children:[{
                    path:'/courses',
                    element:<Course/>,
                    loader: () =>fetch('https://tyro-server.vercel.app/courses')
                },
                {
                    path:'/courses/:id',
                    element:<SingleCourse/>,
                    loader: ({params}) =>{
                        return fetch(`https://tyro-server.vercel.app/courses/${params.id}`)
                    }

                },
                {
                    path:'profile',
                    element:<Profile/>
                },
                {
                    path:'dashboard',
                    element:<Dashboard/>
                }
            ]
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