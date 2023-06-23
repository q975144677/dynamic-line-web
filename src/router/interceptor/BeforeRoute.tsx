import {RouteObject, useLocation} from "react-router";
import {randomId} from "@mantine/hooks";
import {useEffect} from "react";
import {matchRoutes} from "react-router-dom";
import {useRouter} from "@/router";

const BeforeRoute = (props: {
    children?: any,
    className?: string,
    meta?: Record<string, any>
} | Record<string, any>) => {
    const location = useLocation();
    const {routesConfig} = useRouter();
    useEffect(() => {
        beforeInterceptor();
    }, [location.pathname, routesConfig]);
    const beforeInterceptor = () => {
        const matches = matchRoutes(routesConfig as RouteObject[], location.pathname);
        const meta = matches
            ?.map((match) => (match?.route as any)?.meta)
            .reduce((pre, cur) => (Object.assign(pre, cur)), {});
        const title = meta?.title;
        if (title) {
            document.title = title;
        }
        //传递 meta信息到 state 里面
        location.state = Object.assign({...location.state}, meta, {uuid: randomId()});
    }
    return (
        <>
            {props.children}
        </>
    )
}
export default BeforeRoute