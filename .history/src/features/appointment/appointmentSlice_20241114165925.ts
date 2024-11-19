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


// Trunk post function 
export const appointmentUser = createAsyncThunk(
    'user/login',
    async (AppointmentState: { 
        name : string | null ;
        phone : number| null ;
        area: string  | null ;
        appointmentDate: any | null ;
        error: null ;
    }, { rejectWithValue }) =>{
        try {
            const response = await axios.post('/api/login', AppointmentState); // 替换为你的 API URL
            return response.data; // 假设返回的数据包含用户信息
        } catch (error) {
            return rejectWithValue(error.response.data); // 返回错误信息
        }
    }
)

// Trunk get function 
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/user'); // 替换为你的 API URL
            return response.data; // 假设返回的数据包含用户信息
        } catch (error) {
            return rejectWithValue(error.response.data); // 返回错误信息
        }
    }
);



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
        LogOut(state){
            state.name = null;
            state.phone = null;
            state.area = null;
            state.appointmentDate = null;
            
        },
        extraReducers: (builder) => {
            builder
                .addCase(userSlice.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(userSlice.fulfilled, (state, action) => {
                    state.loading = false;
                    state.name = action.payload.name; // 假设返回的数据包含 name
                    state.email = action.payload.email; // 假设返回的数据包含 email
                    state.loggedIn = true;
                })
                .addCase(userSlice.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload; // 设置错误信息
                })
                .addCase(fetchUser.pending, (state) => {
                    state.loading = true; // 请求开始时设置 loading 为 true
                    state.error = null; // 清除之前的错误信息
                })
                .addCase(fetchUser.fulfilled, (state, action) => {
                    state.loading = false; // 请求完成后设置 loading 为 false
                    state.name = action.payload.name; // 设置用户名
                    state.email = action.payload.email; // 设置邮箱
                    state.loggedIn = true; // 用户已登录，假设获取用户信息后也设置为已登录状态
                })
                .addCase(fetchUser.rejected, (state, action) => {
                    state.loading = false; // 请求完成后设置 loading 为 false
                    state.error = action.payload; // 设置错误信息
                });
        },
    }
});

export const { Login, LoginOut } = userSlice.actions;
export default userSlice.reducer;