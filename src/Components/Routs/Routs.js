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
import Details from "../Details/Details";
import DrinkDetails from "../Details/DrinkDetails";
import DrinkRevews from "../Details/DrinkRevews";
import MyRevews from "../MyRevews/MyRevews";

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
                path : '/myReviews',
                element : <MyRevews/>
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
            },
            {
                path : '/Details/:id',
                element : <Details/>,
                loader : ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path : '/drinkDetails/:id',
                element : <DrinkDetails></DrinkDetails>,
                loader : ({params}) =>fetch(`http://localhost:5000/drinks/${params.id}`)
            },
            {
                path : '/reviews/:id',
                element : <DrinkRevews></DrinkRevews>,
                loader: ({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
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
        ]
    },
    {
        path : '*',
        element : <Error/>
    }
])