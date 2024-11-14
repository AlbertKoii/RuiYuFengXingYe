import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import cookieStorage from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js'; // 用于操作 Cookies
import userReducer from '../features/userSlice';

const persistConfig = {
    key: 'root', // 存储的 key
    storage: cookieStorage(Cookies), // 使用 Cookies 作为存储方式
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistedReducer, // 使用持久化的 reducer
    },
});

export const persistor = persistStore(store); 