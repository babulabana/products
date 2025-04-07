// import { counter } from "@fortawesome/fontawesome-svg-core";
import CounterReducer from "./Counterslice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        counter:CounterReducer
    }
})