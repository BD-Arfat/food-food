import { createBrowserRouter } from "react-router-dom";
import Maine from '../Maine/Maine'
import Home from "../Pages/Home/Home/Home";
import Error from "../Error/Error";
import Form from "../Maine/Form";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Products from "../Products/Products";
import ProductLaouts from "../Products/ProductLaouts";
import Drink from "../Products/Drink/Drink";

export const route = createBrowserRouter([
    {
        path : '/',
        element : <Maine/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/product',
                element : <ProductLaouts/>,
                children : [
                    {
                        path : '/product',
                        element : <Products/>
                    },
                    {
                        path : '/product/drink',
                        element : <Drink/>
                    }
                ]
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