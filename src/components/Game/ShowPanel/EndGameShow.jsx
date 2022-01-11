import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGameProcess} from "../../../features/GameProcess/GameProcess";
import {setUser, selectUser} from "../../../features/user/userSlice";
import {sendMsg} from "../GameMain";
import Card from "../../Card/Card";
import {getGameUserList} from "../../../features/GameUser/GameUserListSlice";


function EndGameShow(data){

    const [isShow, setShow] = useState(true);

    const dispatch = useDispatch()

    const gameProcess = useSelector(getGameProcess)
    const nowGameUserList = useSelector(getGameUserList)
    const nowUser = useSelector(selectUser)
    const info = data.info

    useEffect(()=>{
        if(gameProcess.nowStatus === 'endGame'){
            setShow(true)
        }else{
            setShow(false)
        }
    },[gameProcess])

    let publicCardList =()=>{
        return (
            <div className="UserCardItem">
                <Card color={item.Color} value={item.Value} />
            </div>
        )
    }


    let bigCardList = ()=>{
        return (
            <div className="UserCardItem">
                <Card color={item.Color} value={item.Value} />
            </div>
        )
    }

    let winner = ''

    let show = ''


    if(JSON.stringify(info) !== "{}"){
        publicCardList = info.PublicCard.map((item, key) => {
            return (
                <div className="UserCardItem">
                    <Card color={item.Color} value={item.Value} />
                </div>
            )
        })
        bigCardList = info.BigCard.map((item, key) => {
            return (
                <div className="UserCardItem">
                    <Card color={item.Color} value={item.Value} />
                </div>
            )
        })

        let positionUser = nowGameUserList[info.WinPos]
        winner = positionUser.Name

        show = ()=>{
            return(
                <div>
                    <div className="WinCard">
                        Public:
                        {publicCardList}
                    </div>
                    <div className="EndGamePublicCard">
                        Win:
                        {bigCardList}
                    </div>
                    <div className="WinUserList">
                        Winner:{winner}
                    </div>
                </div>
            )
        }
    }



    return (
        <div className="EndGamePanel" style={isShow ? {'display':'block'} : {'display':'none'}}>
            {show}
            <div>
                <div className="EndGameButton" onClick={(event=>{
                    setShow(false)
                    sendMsg("game_op",0,"","start")
                })}>
                    <img src="/img/start.png"/>
                </div>
                <div className="EndGameButton" onClick={(event=>setShow(false))}>
                    <img src="/img/end.png"/>
                </div>
            </div>

        </div>
    )
}

export default EndGameShow