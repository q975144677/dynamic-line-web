import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import BeforeRoute from "@/router/interceptor/BeforeRoute.tsx";
import {Provider} from "react-redux";
import {store} from "@/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <BeforeRoute>
                    <App/>
                </BeforeRoute>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
