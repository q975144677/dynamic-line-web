export interface JsonResult<T> {
    code?: number,
    msg?: string,
    success?: boolean,
    data?: T
}