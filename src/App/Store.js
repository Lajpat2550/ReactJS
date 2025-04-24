import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoSlilce";



export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
    
})
