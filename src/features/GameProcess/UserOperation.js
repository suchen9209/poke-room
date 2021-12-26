import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'userOperation',
    initialState:{
        Message:"",
        Operation:"",
        Point:0,
        Type:""
    },
    reducers:{
        setOperation:(state,action) => {
            // console.log(action)
            console.log(action.payload)
            state.Type = action.payload.type
            state.Operation = action.payload.operation
            state.Point = action.payload.point
        },
        setGameMessage:(state,action)=>{
            state.Message = action.payload.message
            state.Type = action.payload.type
        },
        clearOperation:(state,action)=>{
            state.Message = ""
            state.Operation = ""
            state.Point = 0
            state.Type = ""
        }
    }
})

export const { setOperation,setGameMessage,clearOperation} = slice.actions

// export const getGameUserList = (state)=>state.gameUserList
export const getOperation = (state)=>state.userOperation

export default slice.reducer