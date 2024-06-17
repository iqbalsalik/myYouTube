import { createSlice } from "@reduxjs/toolkit";

const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState: {
    toggleBoolean: true,
  },

  reducers: {
    toggleTheMenu: (state) => {
      state.toggleBoolean = !state.toggleBoolean;
    },
    closeMenu: (state)=>{
      state.toggleBoolean = false
    },
    openMenu: (state)=>{
      state.toggleBoolean = true
    }
  },
});

export const { toggleTheMenu,closeMenu,openMenu } = toggleMenuSlice.actions;

export default toggleMenuSlice.reducer;
