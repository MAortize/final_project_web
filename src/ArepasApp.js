import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './auth/authReducer'
import { AuthContext } from './auth/AuthContext'
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";


let persistor = persistStore(store)

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: true };
}


export const ArepasApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AuthContext.Provider value={{ user, dispatch }}>
                    <AppRouter />
                </AuthContext.Provider>
            </PersistGate>
        </Provider>

    )
}

export default ArepasApp;