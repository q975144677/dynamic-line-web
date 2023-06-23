import classNames from "classnames";
import LoginForm from "./form.tsx";
import {Button} from "@mantine/core";
import {useCallback, useEffect, useState} from "react";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/outline";
import {useToast} from "@/hooks/useToast.tsx";

const Login = (props: { children?: any, className?: string }) => {
    const [formType, setFormType] = useState<'login' | 'register'>('login');
    const {show} = useToast();
    useEffect(() => {
        show({title: 'test', msg: "tfffff", duration: 2000});
    }, [])
    const login = () => {
        return null;
    }
    const register = () => {
        return null;
    }
    const submit = useCallback(() => {
        return formType === 'login' ? login() : register();
    }, []);
    return (
        <>
            <div className={classNames(`w-full pl-8 pr-8  pb-4 box-border`, props)}>
                <div className={`w-full h-full pb-4`}>
                    <LoginForm className={`transition-all`} type={formType}/>
                </div>
                <div className={`w-full flex justify-between`}>
                    {
                        'login' === formType ?
                            (
                                <Button variant="subtle" onClick={() => setFormType(`register`)}>
                                    您还没有账号？点此注册
                                </Button>
                            ) : (
                                <Button variant="subtle" onClick={() => setFormType(`login`)}>
                                    <ArrowUturnLeftIcon className={`w-4`}/>
                                    回退到登录界面
                                </Button>
                            )
                    }
                    <Button variant="filled" className={`bg-primary hover:bg-hover`} onClick={submit}>
                        <div className={`w-16 text-center`}>
                            {formType === 'login' ? '登录' : '注册'}
                        </div>
                    </Button>
                </div>
            </div>
        </>
    )
}
Login.Form = LoginForm;
export default Login