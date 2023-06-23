const TOKEN_KEY = "token";
const EXPIRE_KEY = "expire";
export default () => {
    let tokenInstance = '' ;
    const setToken = (token: string, expire?: string) => {
        localStorage.setItem(TOKEN_KEY, token);
        if (typeof expire === "string") {
            localStorage.setItem(EXPIRE_KEY, expire);
        }
        tokenInstance = token ;
    }

    return [tokenInstance,setToken];
}