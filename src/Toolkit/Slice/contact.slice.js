import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const contactSlice = createSlice({
    name:"contactAction",
    initialState,
    reducers:{
        userData:(state, action)=>{

            const {payload} = action;
            console.log(payload);
        },
    }
})


export const { deleteContact  , addContact , editContact} = contactSlice.actions

export default contactSlice.reducer;