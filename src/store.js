import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/user/userSlice";
import gameUserListReducer from "./features/GameUser/GameUserListSlice";
import gameProcessReducer from "./features/GameProcess/GameProcess";
import userOperation from "./features/GameProcess/UserOperation";
import GameUserListSlice from "./features/GameUser/GameUserListSlice";

export default configureStore({
    reducer:{
        user:userReducer,
        gameUserList:gameUserListReducer,
        gameProcess:gameProcessReducer,
        userOperation:userOperation
    }
})