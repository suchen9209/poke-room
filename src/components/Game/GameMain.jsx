import './GameMain.css'
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import UserNameAndAvatar from "./NowUser/UserNameAndAvatar";
import GameUser from "./GameUser/GameUser";
import RaiseOperation from "./GameUser/RaiseOperation";
import CallOperation from "./GameUser/CallOperation";
import CheckOperation from "./GameUser/CheckOperation";
import FoldOperation from "./GameUser/FoldOperation";
import AllInOperation from "./GameUser/AllInOperation";
import Card from "../Card/Card";
import ShowPanel from "./ShowPanel/ShowPanel";
import {selectUser, setUser} from "../../features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {setGameUser} from "../../features/GameUser/GameUserListSlice";
import GameOperationPanel from "./ShowPanel/GameOperationPanel";
// import { connect } from '@giantmachines/redux-websocket';
import {clearOperation, getOperation} from "../../features/GameProcess/UserOperation";

let ws = {}

// class GameMain extends React.Component{
function GameMain(){
    let { id } = useParams();
    ws = new WebSocket('ws://localhost:8080/v2/room/join/'+id);

    const dispatch = useDispatch()

    // dispatch(connect('ws://localhost:8080/v2/room/join/'+id))

    // const ws = new WebSocket('ws://localhost:8080/v2/room/join/'+id);
    const nowUser = useSelector(selectUser)
    ws.onmessage =  (event)=> {
        let data = event.data
        let json_data =JSON.parse(data)
        console.log(json_data)
        switch (json_data.Type){
            case 0:
                // console.log(json_data)
                break;
            case 1:
                break;
            case 6:
                let userList = json_data.Info
                console.log(userList)
                for (const userListKey in userList) {
                    dispatch(setGameUser(userList[userListKey]))
                }
                //User Info
                break;
            default:
                break;
        }
    }

    ws.onopen = (event) =>{
        // dispatch(setWebSocketConnection(ws))
    }
    ws.onclose = () => {
        // dispatch(closeWebSocketConnection)
    }

    let operation = useSelector(getOperation)
    useEffect(()=>{
        try {
            console.log(operation)
            if(operation.type !== ""){
                sendMsg(operation)
                dispatch(clearOperation())
            }
        }catch (e){
            console.log(e)
        }

    },[operation])



    // render() {
        return (
            <div className="MainPanel">
                <GameOperationPanel />
                <ShowPanel/>
                <div className="UserPanel" >
                    <UserNameAndAvatar/>
                    <div className="UserOperationList">
                        <RaiseOperation />
                        <CallOperation />
                        <CheckOperation />
                        <FoldOperation />
                        <AllInOperation />
                    </div>
                    <div className="UserInfo" >
                        {nowUser.userInfo.point}
                    </div>
                    <div className="UserCard" >
                        <div className="UserCardItem">
                            <Card color="diamond" value="14" />
                        </div>
                        <div className="UserCardItem">
                            <Card color="diamond" value="14" />
                        </div>
                   </div>
                </div>

                <div className="Position1">
                    <GameUser position={1} />
                </div>
                <div className="Position2">
                    <GameUser position={2} />
                </div>
                <div className="Position3">
                    <GameUser position={3} />
                </div>
                <div className="Position4">
                    <GameUser position={4} />
                </div>
                <div className="Position5">
                    <GameUser position={5} />
                </div>
                <div className="Position6">
                    <GameUser position={6} />
                </div>
                <div className="Position7">
                    <GameUser position={7} />
                </div>
                <div className="Position8">
                    <GameUser position={8} />
                </div>
            </div>
        )
    // }


}

export function sendMsg(type,point,operation,msg){
    let tmpObj = {
        Type:type,
        Point:point,
        Operation:operation,
        Message:msg
    }
    console.log(tmpObj)
    ws.send(JSON.stringify(tmpObj))

}

export default GameMain
