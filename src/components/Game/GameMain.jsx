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
import {selectUser, setUser, setUserPosition} from "../../features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {setGameUser} from "../../features/GameUser/GameUserListSlice";
import GameOperationPanel from "./ShowPanel/GameOperationPanel";
// import { connect } from '@giantmachines/redux-websocket';
import {clearOperation, getOperation} from "../../features/GameProcess/UserOperation";
import {Link} from "react-router-dom";
import {
    setNowPosition,
    setGameStatus,
    setAllPointInRound,
    setGameMatchDetal,
    setNowUserDetail,
    addUserOperationIntoShowList,
    setMaxPoint, clearUserOperationShowList
} from "../../features/GameProcess/GameProcess";
import FullScreenTip from './ShowPanel/FullScreenTip';
import { setGameUserOperationList } from '../../features/GameUser/GameUserLastOperation';
import EndGameShow from "./ShowPanel/EndGameShow";
// import GoldFlyShow from './ShowPanel/GoldFlyShow';

let ws = {}

// class GameMain extends React.Component{
function GameMain(){
    let { id } = useParams();
    ws = new WebSocket('ws://localhost:8080/v2/room/join/'+id);

    const dispatch = useDispatch()
    let cardNumber = 0
    let publicCardNumber = 0
    const emptyCard = {Color:"",value:0}
    const [card1, setCard1] = useState(emptyCard);
    const [card2, setCard2] = useState(emptyCard);
    const [endShowGameInfo, setEndShowGameInfo] = useState({});
    const [publicCard, setPublicCard] = useState([
        emptyCard,
        emptyCard,
        emptyCard,
        emptyCard,
        emptyCard,
    ]);

    // dispatch(connect('ws://localhost:8080/v2/room/join/'+id))

    // const ws = new WebSocket('ws://localhost:8080/v2/room/join/'+id);
    const nowUser = useSelector(selectUser)
    ws.onmessage =  (event)=> {
        let data = event.data
        let json_data =JSON.parse(data)
        // console.log(json_data)
        switch (json_data.Type){
            //
            case 0:
                // JOIN
                //You joined the chat room.
                // dispatch(setGameStatus(json_data.gameInfo))
                // console.log(json_data)
                break;
            case 11:
                //game start
                console.log(json_data)
                dispatch(setGameStatus('inGame'))
                setEndShowGameInfo({})
                dispatch(clearUserOperationShowList())
                break;
            case 3:
                //发牌
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
                //公共牌
                let tmpCards = publicCard
                tmpCards[publicCardNumber] = json_data.Card
                setPublicCard(tmpCards)
                publicCardNumber ++
                break;
            case 5:
                //清理场面上的牌
                let tmpPublicCard = [
                    emptyCard,
                    emptyCard,
                    emptyCard,
                    emptyCard,
                    emptyCard,
                ]
                publicCardNumber = 0
                setCard1(emptyCard)
                setCard2(emptyCard)
                setPublicCard(tmpPublicCard)
                break;
            case 6:
                //更新用户信息
                let userList = json_data.Info
                // console.log(userList)
                for (const userListKey in userList) {
                    if(nowUser.userId === userList[userListKey].UserId ){
                        dispatch(setUserPosition(userList[userListKey].Position))
                    }
                    dispatch(setGameUser(userList[userListKey]))
                }

                //User Info
                break;
            case 7:
                //回合信息
                dispatch(setNowPosition(json_data.NowPosition))
                dispatch(setMaxPoint(json_data.MaxPoint))
                dispatch(setAllPointInRound(json_data.AllPointInRound))
                dispatch(setGameMatchDetal(json_data.GM))
                dispatch(setNowUserDetail(json_data.Detail))
                break;
            case 8:
                //玩家操作
                console.log(json_data)
                dispatch(setGameUserOperationList(json_data))
                dispatch(addUserOperationIntoShowList(json_data))
                break;
            case 9:
                dispatch(setGameStatus("endGame"))
                //game end
                break;
            case 10:
                setEndShowGameInfo(json_data)

                console.log(json_data)
                //win info
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
                <FullScreenTip />
                <GameOperationPanel />
                <EndGameShow info={endShowGameInfo} />
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
                        {nowUser.point}
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
