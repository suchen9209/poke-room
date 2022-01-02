import React from "react";
import {useSelector} from "react-redux";
import {getGameUserList} from "../../../features/GameUser/GameUserListSlice";
import {getGameProcess} from "../../../features/GameProcess/GameProcess";
import { getGameUserOperationList } from "../../../features/GameUser/GameUserLastOperation";

function GameUser(data){

    const nowGameUserList = useSelector(getGameUserList)
    const nowGame = useSelector(getGameProcess)
    const positionUser = nowGameUserList[data.position]
    const gameUserOperationList = useSelector(getGameUserOperationList)
    // console.log(positionUser)
    let roName = "";
    if(nowGame.nowPosition === data.position){
        roName = "rotatePic"
    }   
    let content = ""
    if(JSON.stringify(gameUserOperationList[data.position]) !== "{}"){
        let opLog = gameUserOperationList[data.position]

        content = opLog.Operation + " " + opLog.PointNumbr;
    }


    if (JSON.stringify(positionUser) === "{}"){
        return (
            <div>
                <img src="/img/empty.png" />
            </div>
        )
    }{
        return (
            <div>
                <div className="PanelAvatar">
                    <img className={roName} width="100px" height="100px" src="/img/shui.png" />
                </div>
                <div className="PanelName">
                    {positionUser.Name}
                </div>
                <div className="PanelCard">
                    {content}
                </div>
                <div className="PanelPoint">
                    {positionUser.Point}
                </div>
            </div>
        )
    }

}

export default GameUser