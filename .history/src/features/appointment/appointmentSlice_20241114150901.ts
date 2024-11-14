import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AppointmentState {
    name : string | null ;
    phone : number| null ;
    area: string | null ;
    AppointmentDate: any;
}
     
}

const initialState: AppointmentState = {
   
};




