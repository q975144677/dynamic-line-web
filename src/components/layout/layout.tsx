import Sider from "./sider.tsx";
import React, {useMemo} from "react";
import classNames from "classnames";

const Layout = (props: { children?: any, className?: string}) => {
    const hasSider = useMemo(() => (React.Children.toArray(props.children)?.some((child) => (React.isValidElement(child) && child.type === Sider))), [props.children])
    return (
        <>
            <div
                className={classNames(`relative w-full h-full flex flex-1 ${hasSider ? "flex-row" : "flex-col"}`, props.className)}>
                {props.children}
            </div>
        </>
    )
}

export default Layout;