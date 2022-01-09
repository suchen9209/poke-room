import React from "react";
import Card from "../../Card/Card";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { getGameProcess } from "../../../features/GameProcess/GameProcess";

function ShowPanel(data){
    console.log(data)
    let cardList = data.publicCard.map((item, key) => {
        return (
            <div className="UserCardItem">
                <Card color={item.Color} value={item.Value} />
            </div>
        )
    })

    const nowGameProcess = useSelector(getGameProcess)

    let opList = nowGameProcess.lastUserOperationShowList.map((item, key) => {
        return (
            <div>
                {item.Name}  {item.GameMatchLog.Operation} {item.GameMatchLog.PointNumber}
            </div>
        )
    })

    let GameMatchDetail = nowGameProcess.gameMatchDetail

    return (
        <div className="ShowPanel">
            <div className="CardListLine">
                {cardList}
            </div>
            <div className="ShowUserOperationListPanel">
                {opList}
            </div>
            <div className="ShowGameRoundInfoPanel">
                <p>当前已知的情报：</p>
                <p>小盲位置：{GameMatchDetail.SmallBindPosition}</p>
            </div>
        </div>
    )
}


export default ShowPanel