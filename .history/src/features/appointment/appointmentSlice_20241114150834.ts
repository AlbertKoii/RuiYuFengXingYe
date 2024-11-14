import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AppointmentState {
    name : string || null ,
    phone : number
    area: string;
    AppointmentDate: any;
}
     
}

const initialState: AppointmentState = {
   
};




