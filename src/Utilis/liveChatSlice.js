import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name:"liveChat",
    initialState:{
        messages:[]
    },
    reducers:{
        addToMessages:(state, action)=>{
            state.messages.splice(10,1);
            state.messages.unshift(action.payload);
        }
    }
})

export const {addToMessages} = liveChatSlice.actions;
export default liveChatSlice.reducer;