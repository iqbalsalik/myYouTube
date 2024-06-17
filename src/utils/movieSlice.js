import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"videos",
    initialState:{
        videos:null
    },

    reducers:{
        addVideos:(state,action)=>{
            state.videos = action.payload
        }
    }
});

export const {addVideos} = movieSlice.actions;

export default movieSlice.reducer;