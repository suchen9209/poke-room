import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/user/userSlice";
import gameUserListReducer from "./features/GameUser/GameUserListSlice";
import gameProcessReducer from "./features/GameProcess/GameProcess";
import userOperation from "./features/GameProcess/UserOperation";
import gameUserLastOperation from "./features/GameUser/GameUserLastOperation";

export default configureStore({
    reducer:{
        userInfo:userReducer,
        gameUserList:gameUserListReducer,
        gameProcess:gameProcessReducer,
        userOperation:userOperation,
        gameUserOperationList:gameUserLastOperation
    }
})