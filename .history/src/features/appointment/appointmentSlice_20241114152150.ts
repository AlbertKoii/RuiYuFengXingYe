import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AppointmentState {

    Login: ()=> void;
    LogOut: ()=> void;
    name : string | null ;
    phone : number| null ;
    area: string  | null ;
    appointmentDate: any | null ;
}


const initialState: AppointmentState = {
    Login: ()=> void;
    LogOut: ()=> void;
    name : null ,
    phone :null ,
    area: null ,
    appointmentDate: null ,
};

const userSlice = createSlice ({
    name : 'appointment',
    initialState,
    reducers: {
        Login(state , action){
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

export const { Login, LoginOut } = userSlice.actions;
export default userSlice.reducer;



