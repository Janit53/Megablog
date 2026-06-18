import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        auth: authSlice

        // TODO: Add a slice for Posts, to reduce repeated server calls
    }
})

export default store;

