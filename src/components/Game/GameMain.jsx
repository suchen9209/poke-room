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
import {Link} from "react-router-dom";
import {setNowPosition} from "../../features/GameProcess/GameProcess";

let ws = {}

// class GameMain extends React.Component{
function GameMain(){
    let { id } = useParams();
    ws = new WebSocket('ws://localhost:8080/v2/room/join/'+id);

    const dispatch = useDispatch()
    let cardNumber = 0
    let publicCardNumber = 0
    const [card1, setCard1] = useState({Color:"",value:0});
    const [card2, setCard2] = useState({Color:"",value:0});
    const [publicCard, setPublicCard] = useState([
        {"Color":"","Value":"0"},
        {"Color":"","Value":"0"},
        {"Color":"","Value":"0"},
        {"Color":"","Value":"0"},
        {"Color":"","Value":"0"},
    ]);

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
            case 3:
                cardNumber ++
                if(cardNumber === 1){
                    setCard1(json_data.Card)
                    console.log(json_data.Card)
                }else{
                    setCard2(json_data.Card)
                    console.log(json_data.Card)
                    console.log(card1)
                }
                if(cardNumber >= 2){
                    cardNumber = 0
                }
                break;
            case 4:
                let tmpCards = publicCard
                tmpCards[publicCardNumber] = json_data.Card
                setPublicCard(tmpCards)
                publicCardNumber ++
                break;
            case 5:
                let tmpPublicCard = [
                    {"Color":"","Value":"0"},
                    {"Color":"","Value":"0"},
                    {"Color":"","Value":"0"},
                    {"Color":"","Value":"0"},
                    {"Color":"","Value":"0"},
                ]
                publicCardNumber = 0
                setPublicCard(tmpPublicCard)
                break;
            case 6:
                let userList = json_data.Info
                // console.log(userList)
                for (const userListKey in userList) {
                    dispatch(setGameUser(userList[userListKey]))
                }
                //User Info
                break;
            case 7:
                dispatch(setNowPosition(json_data.NowPosition))
                break;
            case 8:
                console.log(json_data)
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

    // render() {
        return (
            <div className="MainPanel">
                <GameOperationPanel />
                <ShowPanel publicCard={publicCard}/>
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
                            <Card color={card1.Color} value={card1.Value} />
                        </div>
                        <div className="UserCardItem">
                            <Card color={card2.Color} value={card2.Value} />
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
