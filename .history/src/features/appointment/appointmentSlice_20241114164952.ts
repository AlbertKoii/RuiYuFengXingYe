import { createSlice, createAsyncThunk, asyncThunkCreator } from '@reduxjs/toolkit';
import axios from 'axios';


interface AppointmentState {

    name : string | null ;
    phone : number| null ;
    area: string  | null ;
    appointmentDate: any | null ;
    error: null ;
}
,

const initialState: AppointmentState = {

    name : null ,
    phone :null ,
    area: null ,
    appointmentDate: null ,
    error : null ,
};

export const appointmentUser = createAsyncThunk(
    'user/login',
    async (AppointmentState: { 
        name : string | null ;
        phone : number| null ;
        area: string  | null ;
        appointmentDate: any | null ;
        error: null ;
    
    }, { rejectWithValue })
)

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