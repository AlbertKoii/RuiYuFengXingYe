import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AppointmentState {
    name: string | null;
    phone: number | null;
    area: string | null;
    appointmentDate: any | null; // 可以根据具体情况替换为更合适的类型
    error: string | null; // 错误信息应该是字符串
    loading: boolean; // 添加 loading 状态以表示请求状态
}

const initialState: AppointmentState = {
    name: null,
    phone: null,
    area: null,
    appointmentDate: null,
    error: null,
    loading: false, // 初始化 loading 状态
};

// POST 请求的异步 thunk
export const appointmentUser = createAsyncThunk(
    'appointment/create',
    async (appointmentData: { 
        name: string | null;
        phone: number | null;
        area: string | null;
        appointmentDate: any | null;
    }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3002/JS_UncleAir_Try', appointmentData); 
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response.data); 
        }
    }
);

// GET 请求的异步 thunk
export const fetchUser = createAsyncThunk(
    'appointment/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3002/JS_UncleAir_Try'); 
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response.data); 
        }
    }
);

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        login(state, action) {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.area = action.payload.area;
            state.appointmentDate = action.payload.appointmentDate;
        },
        logout(state) {
            state.name = null;
            state.phone = null;
            state.area = null;
            state.appointmentDate = null;
            state.error = null; // 清除错误信息
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(appointmentUser.pending, (state) => {
                state.loading = true; // 请求开始时设置 loading 为 true
                state.error = null; // 清除之前的错误信息
            })
            .addCase(appointmentUser.fulfilled, (state, action) => {
                state.loading = false; // 请求完成后设置 loading 为 false
                state.name = action.payload.name; // 假设返回的数据包含 name
                state.phone = action.payload.phone; // 假设返回的数据包含 phone
                state.area = action.payload.area; // 假设返回的数据包含 area
                state.appointmentDate = action.payload.appointmentDate; // 假设返回的数据包含 appointmentDate
            })
            .addCase(appointmentUser.rejected, (state, action) => {
                state.loading = false; // 请求完成后设置 loading 为 false
                state.error = action.payload; // 设置错误信息
            })
            .addCase(fetchUser.pending, (state) => {
                state.loading = true; // 请求开始时设置 loading 为 true
                state.error = null; // 清除之前的错误信息
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false; // 请求完成后设置 loading 为 false
                state.name = action.payload.name; // 设置用户名
                state.phone = action.payload.phone; // 设置电话号码
                state.area = action.payload.area; // 设置区域
                state.appointmentDate = action.payload.appointmentDate; // 设置预约日期
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false; // 请求完成后设置 loading 为 false
                state.error = action.payload; // 设置错误信息
            });
    },
});

export const { login, logout } = appointmentSlice.actions;
export default appointmentSlice.reducer;