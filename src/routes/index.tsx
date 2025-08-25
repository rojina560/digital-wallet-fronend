import App from "@/App";
import Login from "@/pages/login";
import Register from "@/pages/register";

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
