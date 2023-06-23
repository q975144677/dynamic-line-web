import axios from "axios";

export interface User {
    username?: string,
    password?: string,
    nickname?: string
}

export interface ConditionForUser {
    username?: string,
    password?: string,
    nickname?: string,
}

const urls = {
    login: '/api/login',
    register: '/api/register'
}

export const login = (condition: ConditionForUser) => {
    return axios.post<User>(urls.login, condition);
}
export const register = (condition: ConditionForUser) => {
    return axios.post<User>(urls.register, condition);
}
