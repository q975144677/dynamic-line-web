import {IRoute} from "../index.tsx";
import DefaultLayout from "../../layout/defaultLayout.tsx";
import Frontpage from "../../pages/frontpage";

export default [
    {
        path:'/',
        element:<DefaultLayout></DefaultLayout>,
        children:[
            {
                path:'/',
                element:<Frontpage></Frontpage>,
                meta:{
                    title:'首页',
                    navId:'A1'
                }
            }
        ]
    }

] as IRoute[]