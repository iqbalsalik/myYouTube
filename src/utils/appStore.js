import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleMenuSlice";
import videoReducer from "./movieSlice";
import suggestionReducer from "./suggestionSlice";

const appStore = configureStore({
    reducer:{
        toggleMenu:toggleReducer,
        video: videoReducer,
        suggestion: suggestionReducer
    }
})

export default appStore;