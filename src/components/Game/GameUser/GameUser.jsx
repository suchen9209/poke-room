import React from "react";

function GameUser(data){
    // console.log(data.position)
    return (
        <div>
            <div className="PanelAvatar">
                <img width="100px" height="100px" src="/img/shui.png" />
            </div>
            <div className="PanelName">
                {data.position}
            </div>
            <div className="PanelCard">
                上次操作 + 本局游戏状态
            </div>
            <div className="PanelPoint">
                当前积分
            </div>
        </div>
    )
}

export default GameUser