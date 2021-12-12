import {createSlice} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";
import {loadUserState} from "./localStorage";

const persistedUser =  loadUserState()

export const slice = createSlice({
    name:'user',
    initialState:persistedUser,
    reducers:{
        setUser:(state,action) => {
            state.userInfo = action.payload
        },
        clearUser: state => {
            state.userInfo ={
                name:'You',
                    point:0,
                    userId:0,
                    avatar:'/img/tou.png'
            }
        }
    }
})

export const { setUser,clearUser} = slice.actions

export const selectUser = (state)=>state.user

export default slice.reducer