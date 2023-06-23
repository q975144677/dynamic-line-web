import INavbar from "../components/nav";
import {useEffect, useState} from "react";
import {Avatar, Button, Drawer, Input, Modal} from "@mantine/core";
import {Bars3Icon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Logo from "../components/logo";
import test from '@/assets/react.svg'
import Login from "@/pages/login";
import {shadowInputStyle} from "@/components/input/shadowInputStyle.ts";
import {useLocation, useNavigate} from "react-router";

const INavBar = (props: { children?: any, className?: string }) => {
    const navigator = useNavigate();
    const [isLoginFormOpened, setLoginFormOpened] = useState(false);
    const tempData = [
        {text: '首页', href: '/', id: 'A1'},
        {text: '创作', href: '#', id: 'A2'},
        {text: '需求墙', href: '#', id: 'A3'},
        {text: '管理', href: '/admin', id: 'A4'}
    ]
    const location = useLocation();
    useEffect(() => {
        setActive(location?.state?.navId ?? 'A1');
    }, [])

    const [active, setActive] = useState('');
    const [showDrawer, setShowDrawer] = useState(false);
    return (
        <>
            <INavbar {...props} className={classNames(``, props.className)}>
                <INavbar.Brand>
                    <div className={`flex flex-row justify-center items-center`}>
                        <Logo className={`hidden md:block`}></Logo>
                        <div onClick={() => (setShowDrawer(!showDrawer))}>
                            <Bars3Icon
                                className={`w-8 block md:hidden cursor-pointer transition-all ${showDrawer ? 'rotate-90' : 'rotate-0'}`}/>
                            <Drawer
                                size={`xs`}
                                onClose={() => {
                                    setShowDrawer(false)
                                }}
                                opened={showDrawer}
                                title={<div className={`font-bold`}>导航菜单</div>}
                                overlayProps={{opacity: 0.5, blur: 4}}
                            >
                                <div className={`flex flex-col gap-4`}>
                                    {tempData.map((data) => (
                                        <INavbar.Item className={``} key={`nav-item-drawer-${data.id}`}
                                                      isActive={active === data.id} type={`drawer`}
                                                      onClick={() => {
                                                          setActive(data.id);
                                                          navigator(data.href);
                                                      }}>
                                            <div
                                                className={`h-full cursor-pointer flex flex-col justify-center items-center`}>
                                                {data.text}
                                            </div>
                                        </INavbar.Item>
                                    ))}
                                </div>
                            </Drawer>
                        </div>
                    </div>
                </INavbar.Brand>
                <INavbar.Content>
                    {tempData.map((data) => (
                        <INavbar.Item className={`hidden md:block`} key={`nav-item-${data.id}`}
                                      isActive={active === data.id} onClick={() => {
                            setActive(data.id);
                            navigator(data.href);
                        }}>
                            <div className={`h-full cursor-pointer flex flex-col justify-center items-center`}>
                                {data.text}
                            </div>
                        </INavbar.Item>
                    ))}
                    <INavbar.Item className={`hidden md:block`}>
                        <Input icon={<MagnifyingGlassIcon className={`w-4`}></MagnifyingGlassIcon>}
                               placeholder={`Search...`}
                               variant={`filled`}
                               styles={shadowInputStyle}
                        />
                    </INavbar.Item>
                </INavbar.Content>
                <INavbar.Action>
                    {/*这里 Mantine 和 Tailwindcss 有个CSS小冲突*/}
                    {/*Tailwindcss 默认将 button 的样式替换为了 无背景色，导致Mantine非选中状态下没背景了，需手动添加背景色*/}
                    {/*或者把tailwindcss base 去掉也行， 我觉得还是手动指定颜色吧*/}
                    <Button className={`bg-primary hover:bg-hover transition-all shadow-md`} onClick={() => {
                        setLoginFormOpened(true)
                    }}>
                        登录 / 注册
                    </Button>
                    <div className={`w-48 flex flex-row gap-4  items-center `}>
                        <div className={`w-8`}>
                            <Avatar src={test}></Avatar>
                        </div>
                        <div className={`w-40`}>
                            <div className={`w-40 truncate text-sm`}>最长八个字的中文</div>
                            <div className={`w-40 text-gray-400 truncate text-xs`}>签名签名签名签名签名签名签名</div>
                        </div>
                    </div>
                </INavbar.Action>
            </INavbar>
            <Modal
                opened={isLoginFormOpened}
                onClose={() => {
                    setLoginFormOpened(false)
                }}
                title={<div className={``}>登录 / 注册</div>}
                overlayProps={{
                    opacity: 0.1,
                    blur: 3,
                }}
            >
                <Login></Login>
            </Modal>

        </>
    )
}
export default INavBar;