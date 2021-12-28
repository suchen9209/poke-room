import React from "react";
import {useSelector} from "react-redux";
import {getGameUserList} from "../../../features/GameUser/GameUserListSlice";
import {getGameProcess} from "../../../features/GameProcess/GameProcess";

function GameUser(data){

    const nowGameUserList = useSelector(getGameUserList)
    const nowGame = useSelector(getGameProcess)
    const positionUser = nowGameUserList[data.position]
    // console.log(positionUser)
    let roName = "";
    if(nowGame.nowPosition === data.position){
        roName = "rotatePic"
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
                    上次操作 + 本局游戏状态
                </div>
                <div className="PanelPoint">
                    {positionUser.Point}
                </div>
            </div>
        )
    }

}

export default GameUser