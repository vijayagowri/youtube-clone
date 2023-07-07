import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import commentsSlice from "./commentsSlice";

const store = configureStore({
    reducer:{
        menu:MenuSlice,
        search:searchSlice,
        liveChat:liveChatSlice,
        comments:commentsSlice
    }
})

export default store;