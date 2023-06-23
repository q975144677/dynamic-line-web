export interface Auth {
    name: string
}

export interface Role {
    name: string,
    auth: Auth[]
}

const Authentication = (props: {
    children?: any,
    className?: string,
    roles: string[],
    auth: string[]
} | Record<string, any>) => {
    //TODO 判断当前用户 是否有 权限
    //TODO 目前暂未存储用户权限，先随便假定一个，然后固定返回true
    const userRole: Role[] = [];
    const userAuth = userRole.flatMap(role => role.auth);
    const {roles, auth} = props;
    return (
        <>
            {
                (roles?.some((role: string) => (userRole.some(currentUserRole => role === currentUserRole.name)))
                    || auth?.some((currentAuth: string) => (userAuth.some(currentUserAuth => currentAuth === currentUserAuth.name))))
                && props.children
            }
        </>
    )
}
export default Authentication