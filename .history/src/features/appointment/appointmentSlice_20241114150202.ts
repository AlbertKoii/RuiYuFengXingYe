import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface AppointmentState {
     
}

const initialState: AppointmentState = {
   
};

export const AppointmentUser = createAsyncThunk(
    'user/Appointment',
    async (userData: {
        name : string;
        phone : number;
        area: string;
        AppointmentDate: string;
        error : string;
        }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/login', userData); // 替换为你的 API URL
            return response.data; // 假设返回的数据包含用户信息
        } catch (error) {
            return rejectWithValue(error.response.data); // 返回错误信息
        }
    }
);



