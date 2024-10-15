import { configureStore } from "@reduxjs/toolkit"

import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'
// redux config
export const store = configureStore({
    reducer: {
        auth: authReducer,
        user:  userReducer

    }
})