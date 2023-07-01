import { createBrowserRouter } from "react-router-dom";
import Maine from '../Maine/Maine'
import Home from "../Pages/Home/Home/Home";
import Error from "../Error/Error";
import Form from "../Maine/Form";
import Register from "../Register/Register";
import Login from "../Login/Login";

export const route = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                path : '/',
                element : <Home/>
            }
        ],
    },
    {
        path : '/',
        element : <Form></Form>,
        children : [
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    },
    {
        path : '*',
        element : <Error/>
    }
])