import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AppointmentState {
    name : string | null ;
    phone : number| null ;
    area: string  | null ;
    AppointmentDate: any | null ;
}


const initialState: AppointmentState = {
    name : null ,
    phone :null ,
    area: null ,
    AppointmentDate: null ,
};

const UserSlice = createSlice ({
    name : 'appointment',
    initialState,
    reducers: {
        LoginIn(state , action){

         },
        LoginOut(state){
            
        }
    }
})



