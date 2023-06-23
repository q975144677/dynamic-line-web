import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";

export interface IToast {
    key?: string,
    title?: string,
    msg?: string,
    duration?: number,
    backgroundColor?: string
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        toastList: [] as any[]
    },
    reducers: {
        addToast: (state, action: PayloadAction<IToast>) => {
            action.payload.key = action.payload.key ? action.payload.key : nanoid();
            state.toastList.push(action.payload);
        },
        deleteToast: (state, action: PayloadAction<string>) => {
            state.toastList = state.toastList.filter((val) => val.key !== action.payload)
        }
    }
})


export const {addToast, deleteToast} = toastSlice.actions;