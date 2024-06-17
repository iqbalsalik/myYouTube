import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name:"search",
    initialState:{
        value:{}
    },
    reducers:{
        addSearchSuggestions:(state,action)=>{
            state.value = {...state.value,...action.payload}
        }
    }
})

export const {addSearchSuggestions} = suggestionSlice.actions;

export default suggestionSlice.reducer