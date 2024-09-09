import { configureStore } from "@reduxjs/toolkit"

import authReducer from './slices/authSlice'

// redux config
export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})