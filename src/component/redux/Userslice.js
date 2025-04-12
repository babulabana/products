import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    username:"",
    islogin:false
}

 const Userslice=  createSlice({
    name:"user",
    initialState,
    reducers:{
            loginaction:(state)=>
            {
                state.islogin=true;
            },
            logoutaction:(state)=>
            {
                state.islogin=false
            }
    }
 })

 export const {loginaction,logoutaction} = Userslice.actions

 export default Userslice.reducer