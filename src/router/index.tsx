import {RouteObject, useRoutes} from "react-router";
import {useEffect, useState} from "react";
import BeforeRoute from "@/router/interceptor/BeforeRoute.tsx";

export interface IRoute {
    path?: string,
    name?: string,
    element?: any,
    children?: IRoute[],
    meta?: Record<string, any>,
    index?: boolean
}

//为result中每个元素附加路由守卫
const dfs = (root: IRoute[]) => {
    root.forEach(route => route.element = <BeforeRoute meta={route.meta}>{route.element}</BeforeRoute>)
    root.forEach(route => route.children && dfs(route.children));
}

const useRouter = () => {
    const [router, setRouter] = useState<IRoute[]>([]);
    useEffect(() => {
        (() => {
            const result:IRoute[]|RouteObject[] = [];
            const modules = import.meta.glob('./routes/*.tsx', {eager: true});
            for (const path in modules) {
                const module = modules[path];
                const moduleDefault = (module as any)?.default;
                if (moduleDefault?.length && moduleDefault?.length > 0) {
                    const routes = [...moduleDefault];
                    // dfs(routes);
                    result.push(...routes);
                }
            }
            setRouter(result);
        })();
        return ()=>{
            setRouter([]) ;
        }
    }, [])
    const routes = useRoutes(router as RouteObject[]);
    return {routes, routesConfig:router, setRouter};
}

export {useRouter} ;