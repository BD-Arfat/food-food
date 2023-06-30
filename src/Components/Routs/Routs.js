import { createBrowserRouter } from "react-router-dom";
import Maine from '../Maine/Maine'
import Home from "../Pages/Home/Home/Home";

export const route = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                path : '/',
                element : <Home/>
            }
        ]
    }
])