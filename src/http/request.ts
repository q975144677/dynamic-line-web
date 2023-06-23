import axios from "axios";
import useToken from "../hooks/useToken.ts";

const TOKEN_KEY = 'token';
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: import.meta.env.VITE_HTTP_TIMEOUT
})

//前置拦截器 ，拼接Header信息
service.interceptors.request.use((config) => {
    const [token] = useToken();
    config.headers[TOKEN_KEY] = token;
    return config;
}, error => {
    console.log(`Request Error : ${error}}`) // fixme: for debug --- todelete
    return Promise.reject(error)
});

//后置拦截器，用于返回泛型结果集
service.interceptors.response.use((response) => {
    const res = response.data;
    if (res.success) {
        return res;
    }
    //TODO 完善不同情况接口的反馈
    switch (res.code) {
        case 200:
            break;
        case 403:
            break;
        case 404:
            break;
        case 500:
            break;
    }
    return Promise.reject(res.msg);
}, (error) => {
    console.log(`Response Error : ${error}`);
    return error ;
})

/**
 * 理想实现方式
 * const result:UserDO =  service.<UserDO>get(api);
 */
export default service;