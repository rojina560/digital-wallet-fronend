import App from "@/App";
import login from "@/pages/login";
import { createBrowserRouter } from "react-router";
 export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[{
            path:'login',
            Component:login
        }]
    }
])
