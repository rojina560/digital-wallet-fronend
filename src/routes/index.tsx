import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";


import { createBrowserRouter } from "react-router";
 export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[{
            path:'login',
            Component:Login
        },
        {
            Component:Register,
            path:'register'
        }
    ]
    }
])
