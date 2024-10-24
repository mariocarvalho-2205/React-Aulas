import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
    user: {},
    error: false,
    success: false,
    loading: false,
    message: null
}

// Get user details
export const profile = createAsyncThunk(
    'user/profile',
    async (user, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user?.token
            if (!token) {
                throw new Error("Token não encontrado");
            }
            
            const data = await userService.profile(user, token)
            return data

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    })

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(profile.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(profile.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.user = action.payload;
            })
            .addCase(profile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.user = null;
            });
    }
})
export const { resetMessage } = userSlice.actions
export default userSlice.reducer