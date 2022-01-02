import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'gameProcess',
    initialState:{
        nowStatus:"online",
        nowUserNumber:1,
        nowPosition:1,
        maxPoint:0,
        allPointInRound:0,
        gameMatchDetail:{},
        nowUserDetail:{},
        lastUserOperationShowList:[
            {
                "GameMatchLog":{
                    "Operation":"raise",
                    "PointNumber":5
                },
                "Name":"wuke",
                "Position":2
            }
        ]
    },
    reducers:{
        setGameStatus:(state,action) => {
            state.nowStatus = action.payload
        },
        setNowPosition:(state,action) => {
            state.nowPosition = action.payload
        },
        setGameUserNumber:(state,action)=>{
            state.nowUserNumber = action.payload
        },
        setMaxPoint:(state,action)=>{
            state.maxPoint = action.payload
        },
        setAllPointInRound:(state,action)=>{
            state.allPointInRound = action.payload
        },
        setGameMatchDetal:(state,action)=>{
            state.gameMatchDetail = action.payload
        },
        setNowUserDetail:(state,action)=>{
            state.nowUserDetail = action.payload
        },
        addUserOperationIntoShowList:(state,action)=>{
            state.lastUserOperationShowList.pusu(action.payload)
            if(state.lastUserOperationShowList.length > 5){
                state.lastUserOperationShowList.shift()
            }
        }
    }
})

export const { setGameStatus,setGameUserNumber,setNowPosition,setMaxPoint,setAllPointInRound,setGameMatchDetal,setNowUserDetail,addUserOperationIntoShowList} = slice.actions

// export const getGameUserList = (state)=>state.gameUserList
export const getGameProcess = (state)=>state.gameProcess

export default slice.reducer