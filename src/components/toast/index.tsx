import classNames from "classnames";
import {useSelector} from "react-redux";

const Toast = (props: {
    children?: any,
    className?: string,
    message?: string
} | Record<string, any>) => {
    const toastState = useSelector((state: any) => state.toast);

    return (
        <>
            <div
                className={classNames(`absolute top-0 bottom-0 left-0 right-0 z-50 pointer-events-none`, props.className)} {...props}>
                {(toastState.toastList || [])?.map((val: any) => JSON.stringify(val))?.join(",")}
            </div>
        </>
    )
}
export default Toast;