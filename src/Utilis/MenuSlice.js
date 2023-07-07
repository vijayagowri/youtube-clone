import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name:'menu',
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleSideBar: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        hideMenuBar:(state)=>{
            state.isMenuOpen = false;
        }
    }
})

export const {toggleSideBar, hideMenuBar} = MenuSlice.actions;
export default MenuSlice.reducer;