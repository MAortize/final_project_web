import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

store.subscribe(() => console.log(store));


export default store;
