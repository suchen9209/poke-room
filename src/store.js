import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/user/userSlice";
import gameUserListReducer from "./features/GameUser/GameUserListSlice";
import GameUserListSlice from "./features/GameUser/GameUserListSlice";

export default configureStore({
    reducer:{
        user:userReducer,
        gameUserList:gameUserListReducer
    }
})