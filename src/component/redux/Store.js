// import { counter } from "@fortawesome/fontawesome-svg-core";
import CounterReducer from "./Counterslice"
import UserReducer from "./Userslice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        counter:CounterReducer,
        user:UserReducer
    }
})