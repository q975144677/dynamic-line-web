import classNames from "classnames";

const Sider = (props:{children?:any,className?:string}) => {
    return (
        <>
            <div className={classNames(``,props.className)}>
                {props.children}
            </div>
        </>
    )
}
export default Sider ;