import {configureStore} from "@reduxjs/toolkit";
import {toastSlice} from "@/store/modules/toast";

export const store = configureStore({
    reducer:{
        toast:toastSlice.reducer
    }
})