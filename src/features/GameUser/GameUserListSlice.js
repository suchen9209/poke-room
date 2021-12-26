import {createSlice} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";

export const slice = createSlice({
    name:'gameUserList',
    initialState:{
        1:{},
        2:{},
        3:{},
        4:{},
        5:{},
        6:{},
        7:{},
        8:{},
    },
    reducers:{
        setGameUser:(state,action) => {
            let gameUser = action.payload
            state[gameUser.Position] = action.payload
        },
        delGameUser:(state,action)=>{
            state[action.payload] = {}
        }
    }
})

export const { setGameUser,delGameUser} = slice.actions

export const getGameUserList = (state)=>state.gameUserList

export default slice.reducer