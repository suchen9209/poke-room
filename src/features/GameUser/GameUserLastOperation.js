import {createSlice} from "@reduxjs/toolkit";

const emptyState = {
    1:{},
    2:{},
    3:{},
    4:{},
    5:{},
    6:{},
    7:{},
    8:{}
}

export const slice = createSlice({
    name:'gameUserOperationList',
    initialState:emptyState,
    reducers:{
        setGameUserOperationList:(state,action) => {
            let info = action.payload
            state[info.Position] = action.payload.GameMatchLog
        },
        clearOperationList:(state,action)=>{
            if(action.payload === 0){
                state = emptyState
            }else{
                state[action.payload] = {}
            }
            
        }
    }
})

export const { setGameUserOperationList,clearOperationList} = slice.actions

export const getGameUserOperationList = (state)=>state.gameUserOperationList

export default slice.reducer