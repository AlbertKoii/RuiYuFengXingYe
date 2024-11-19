import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../../features/appointment/appointmentSlice'; // 确保路径正确

const store = configureStore({
    reducer: {
        addAppointment(state, action: PayloadAction<Appointment>) {
            state.appointments.push(action.payload);
        },
        removeAppointment(state, action: PayloadAction<number>) {
            state.appointments.splice(action.payload, 1);
    },
});

// 导出 store 和 RootState 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;