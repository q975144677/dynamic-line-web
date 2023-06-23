import {IRoute} from "@/router";
import DefaultLayout from "@/layout/defaultLayout.tsx";
import Admin from "@/pages/admin";
import UserAdmin from "@/pages/admin/user";
import RoleAdmin from "@/pages/admin/role";
import {Navigate} from "react-router";

export default [
    {
        path: '/admin',
        element: <DefaultLayout></DefaultLayout>,
        children: [
            {
                path: '',
                element: <Admin></Admin>,
                meta: {
                    title: 'dynamicline管理端',
                    navId: 'A4'
                },
                children: [
                    {
                        index:true,
                        element:<Navigate to={`/admin/user`} />
                    },
                    {
                        path: 'user',
                        element: <UserAdmin></UserAdmin>,
                        meta: {
                            title: '用户信息管理'
                        }
                    }, {
                        path: 'role' ,
                        element : <RoleAdmin></RoleAdmin>,
                        meta:{
                            title: '角色信息管理'
                        }
                    }
                ]
            }
        ]
    }
] as IRoute[]
