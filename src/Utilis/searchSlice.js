import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
       updateCacheStore:(state, actions)=>{
        state = Object.assign(state, actions.payload)
       }
    }

})

export const {updateCacheStore} = searchSlice.actions;
export default searchSlice.reducer;