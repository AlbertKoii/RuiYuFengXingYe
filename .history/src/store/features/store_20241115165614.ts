import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../../features/appointment/appointmentSlice'; // 确保路径正确

interface Appointment {
    name: string;
    phone: string;
    area: string;
    appointmentDate: string;
}

interface AppointmentState {
    appointments: Appointment[];
}

const initialState: AppointmentState = {
    appointments: [],
};


const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addAppointment(state, action: PayloadAction<Appointment>) {
            state.appointments.push(action.payload);
        },
        removeAppointment(state, action: PayloadAction<number>) {
            state.appointments.splice(action.payload, 1);
        },
    },
});

export const { addAppointment, removeAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;