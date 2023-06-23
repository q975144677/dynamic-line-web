import ReactDOM from "react-dom/client";
import {useEffect} from "react";
import Toast from "@/components/toast";
import {store} from "@/store";
import {Provider, useDispatch} from "react-redux";
import {addToast, deleteToast, IToast} from "@/store/modules/toast";

export const useToast = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const targetDiv = document.getElementById("i-toast-container");
        if (!targetDiv) {
            const toastContainer = document.createElement("div");
            toastContainer.setAttribute('id', 'i-toast-container');
            document.body.appendChild(toastContainer);
            const node =
                <Provider store={store}>
                    <Toast id={`i-toast-detail`}/>
                </Provider>;
            ReactDOM.createRoot(toastContainer)
                .render(node);
        }

    }, []);
    const show = (options: IToast) => {
        dispatch(addToast(options))
        if (options.key && options.duration) {
            setTimeout(() => {
                dispatch(deleteToast(options.key as string))
            }, options.duration)
        }
    }
    return {show};
}