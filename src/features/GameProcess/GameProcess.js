import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'gameProcess',
    initialState:{
        nowStatus:"online",
        nowUserNumber:1
    },
    reducers:{
        setGameStatus:(state,action) => {
            state.nowStatus = action.payload
        },
        setGameUserNumber:(state,action)=>{
            state.nowUserNumber = action.payload
        }
    }
})

export const { setGameStatus,setGameUserNumber} = slice.actions

// export const getGameUserList = (state)=>state.gameUserList
export const getGameProcess = (state)=>state.gameProcess

export default slice.reducer