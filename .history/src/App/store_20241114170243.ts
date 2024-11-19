import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../'; // 确保路径正确

const store = configureStore({
    reducer: {
        appointment: appointmentReducer, // 将 appointmentSlice 的 reducer 添加到 store 中
    },
});

// 导出 store 和 RootState 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;