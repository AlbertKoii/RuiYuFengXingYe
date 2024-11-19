import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppointmentState {
     
}

const initialState: AppointmentState = {
   
};

export const AppointmentUser = createAsyncThunk(
    'user/Appointment',
    async (userData: {
         email: string; 
         password: string 
        }, { rejectWithValue:any }) => {
        try {
            const response = await axios.post('/api/login', userData); // 替换为你的 API URL
            return response.data; // 假设返回的数据包含用户信息
        } catch (error) {
            return rejectWithValue(error.response.data); // 返回错误信息
        }
    }
);