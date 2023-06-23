import classNames from "classnames";

const RoleAdmin = (props: { children?: any, className?: string } | Record<string, any>) => {

    return (
        <>
            <div className={classNames(``, props.className)} {...props} >
                Role
            </div>
        </>
    )
}
export default RoleAdmin