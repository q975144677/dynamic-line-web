import classNames from "classnames";

const UserAdmin = (props: { children?: any, className?: string } | Record<string, any>) => {

    return (
        <>
            <div className={classNames(``, props.className)} {...props}>
                User
            </div>
        </>
    )
}
export default UserAdmin