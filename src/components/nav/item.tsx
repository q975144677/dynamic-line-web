import classNames from "classnames";

const INavItem = (props: {
    children?: any,
    className?: string,
    isActive?: boolean,
    type?: 'drawer' | 'navigator'
} | Record<string, any>) => {
    const propsForDiv = Object.assign({}, props);
    delete propsForDiv.isActive;
    delete propsForDiv.type;
    const classNameForActive = "after:content-[''] after:w-full after:block after:h-1 after:bg-primary after:absolute after:bottom-0 after:left-0 after:rounded";
    const classNameForDrawer = "after:h-full after:-z-10";
    const classNameForDrawerText = "text-white hover:text-white";
    return (
        <>
            <div {...propsForDiv}
                 className={classNames(` pl-4 pr-4 text-center relative h-full`, `${props.isActive ? classNameForActive : ""}`, `${props.type === 'drawer' ? classNameForDrawer : ""}`, props.className)}>
                <div
                    className={`text-black  relative h-full block flex justify-center items-center hover:text-hover ${props.isActive ? "font-bold" : ""} ${props.type === "drawer" && props.isActive ? classNameForDrawerText : ""}`}>
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default INavItem