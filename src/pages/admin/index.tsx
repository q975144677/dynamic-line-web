import classNames from "classnames";
import {Navbar} from "@mantine/core";
import {Outlet} from "react-router";

const Admin = (props: { children?: any, className?: string } | Record<string, any>) => {
    const menus = [{name: '用户管理', href: '/admin/user', id: 'A4.1'}, {
        name: '角色管理',
        href: '/admin/role',
        id: 'A4.2'
    }];
    return (
        <>
            <div {...props} className={classNames(`h-full flex flex-row z-0 `, props.className)}>
                <Navbar p="xs" width={{base: 300}}
                        className={`h-full`}>
                    <Navbar.Section grow mt="md">
                        {menus.map(menu => (
                            <div key={`menu-item-${menu.id}`}>
                                {menu.name}
                            </div>
                        ))}
                    </Navbar.Section>
                    <Navbar.Section>
                        123
                    </Navbar.Section>
                </Navbar>
                <div className={`admin-content`}>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
export default Admin