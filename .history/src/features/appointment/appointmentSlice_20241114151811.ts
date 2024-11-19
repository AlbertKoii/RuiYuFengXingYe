import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AppointmentState {
    name : string | null ;
    phone : number| null ;
    area: string  | null ;
    appointmentDate: any | null ;
}


const initialState: AppointmentState = {
    name : null ,
    phone :null ,
    area: null ,
    appointmentDate: null ,
};

const UserSlice = createSlice ({
    name : 'appointment',
    initialState,
    reducers: {
        LoginIn(state , action){
            state.name = action.payload.name
            state.phone = action.payload.phone
            state.area = action.payload.area
            state.appointmentDate = action.payload.appointmentDate
         },
        LoginOut(state){
            state.name = null;
            state.phone = null;
            state.area = null;
            state.appointmentDate = null;
            
        }
    }
});

export const { login, logout } = userSlice.actions;
export default UserSlice.reducer;



