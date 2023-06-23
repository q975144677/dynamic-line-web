import {useCallback} from "react";
import classNames from "classnames";
import {DevicePhoneMobileIcon, FaceSmileIcon, LockClosedIcon, UserIcon} from "@heroicons/react/24/outline";
import {PasswordInput, TextInput} from "@mantine/core";
import {shadowInputStyle} from "@/components/input/shadowInputStyle.ts";

const LoginForm = (props: { children?: any, className?: string, type?: 'login' | 'register' }) => {
    const login = useCallback(() => {
        //todo invoke backend login api ;
    }, [])

    login();
    return (
        <>
            <div {...props} className={classNames(` w-full`, props.className)}>
                <div className={`pb-2`}>
                    <TextInput icon={<UserIcon className={`w-4`}/>} label={<div className={`text-xs`}>账户名</div>}
                               variant={`filled`} radius={`md`} styles={shadowInputStyle}></TextInput>
                </div>
                <div className={`pb-2`}>
                    <PasswordInput icon={<LockClosedIcon className={`w-4`}/>}
                                   label={<div className={`text-xs`}>密码</div>}
                                   variant={`filled`} radius={`md`} styles={shadowInputStyle}></PasswordInput>
                </div>
                {
                    'register' === props.type ? (
                        <>
                            <div className={`pb-2`}>
                                <TextInput icon={<FaceSmileIcon className={`w-4`}/>}
                                           label={<div className={`text-xs`}>昵称</div>}
                                           variant={`filled`} radius={`md`} styles={shadowInputStyle}></TextInput>
                            </div>
                            <div className={`pb-2`}>
                                <TextInput icon={<DevicePhoneMobileIcon className={`w-4`}/>}
                                           label={<div className={`text-xs`}>手机号</div>}
                                           variant={`filled`} radius={`md`} styles={shadowInputStyle}></TextInput>
                            </div>
                        </>
                    ) : ""
                }
            </div>
        </>
    )
}
export default LoginForm