import {createSlice} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";

export const slice = createSlice({
    name:'user',
    initialState:{
        userInfo :{
            name:'You',
            point:0,
            userId:0,
            avatar:'/img/tou.png'
        }
    },
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