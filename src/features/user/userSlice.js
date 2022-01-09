import {createSlice} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";
import {loadUserState} from "./localStorage";

const persistedUser =  loadUserState()

export const slice = createSlice({
    name:'userInfo',
    initialState:persistedUser,
    reducers:{
        setUser:(state,action) => {
            console.log(state)
            console.log(action)
            state.avatar = action.payload.avatar
            state.name = action.payload.name
            state.point = action.payload.point
            state.userId = action.payload.userId
            state.position = action.payload.position

        },
        setUserPosition:(state,action)=>{
            state.position = action.payload
        },
        clearUser: (state,action) => {
            state ={
                name:'You',
                point:0,
                userId:0,
                avatar:'/img/tou.png',
                position:0
            }
        }
    }
})

export const { setUser,clearUser,setUserPosition} = slice.actions

export const selectUser = (state)=>state.userInfo

export default slice.reducer