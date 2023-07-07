import { createSlice } from '@reduxjs/toolkit';
import { Comments } from '../Utilis/mockData';

const commentsSlice = createSlice({
    name:"comments",
    initialState: Comments,
    reducers:{

    }
})

//export const {} = commentsSlice.actions;
export default commentsSlice.reducer;