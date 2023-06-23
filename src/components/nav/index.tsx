import classNames from "classnames";
import INavBrand from "./brand.tsx";
import React from "react";
import INavContent from "./content.tsx";
import INavAction from "./action.tsx";
import INavItem from "./item.tsx";

const INavbar = (props: { children?: any, className?: string } | any ) => {

    return (
        <>
            <div {...props}
                 className={classNames(`z-50 backdrop-blur-md backdrop-saturate-150 sticky top-0 relative flex flex-row flex-none justify-between items-center pl-4 pr-4 bg-transparent h-20 shadow-md`, props.className)}>
                <div className={`h-full flex justify-center items-center`}>{React.Children.toArray(props.children).find(child => React.isValidElement(child) && child.type === INavBrand)}</div>
                <div className={`h-full flex justify-center items-center`}>{React.Children.toArray(props.children).find(child => React.isValidElement(child) && child.type === INavContent)}</div>
                <div className={`h-full flex justify-center items-center`}>{React.Children.toArray(props.children).find(child => React.isValidElement(child) && child.type === INavAction)}</div>
            </div>
        </>
    )
}
INavbar.Brand = INavBrand;
INavbar.Content = INavContent;
INavbar.Action = INavAction;
INavbar.Item = INavItem;
export default INavbar