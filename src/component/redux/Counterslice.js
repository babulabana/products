import { createSlice } from "@reduxjs/toolkit";

const initialstate ={
    value:0,
    username:"Raman"
}

 const Counterslice=  createSlice({
    name:" counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1;
        }
    }
 })

 export const {increment} = Counterslice.actions

 export default Counterslice.reducer