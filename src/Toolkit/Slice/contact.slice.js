import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const contactSlice = createSlice({
    name:"contactAction",
    initialState,
    reducers:{
        userData:(state, action)=>{
            const {payload} = action;
            return payload
        },
        userMobile:(state, action)=>{
            const {payload} = action;
            return payload
        },

    }
})


export const {userData , userMobile} = contactSlice.actions

export default contactSlice.reducer;