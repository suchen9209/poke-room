import React from "react";
import Card from "../../Card/Card";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { getGameProcess } from "../../../features/GameProcess/GameProcess";

function ShowPanel(data){
    console.log(data)
    let cardList = data.publicCard.map((item, key) => {
        console.log(item)
        return (
            <div className="UserCardItem">
                <Card color={item.Color} value={item.Value} />
            </div>
        )
    })

    const nowGameProcess = useSelector(getGameProcess)

    return (
        <div className="ShowPanel">
            <div className="CardListLine">
                {cardList}
            </div>
            <div>
                It's Turn to {nowGameProcess.nowPosition}
            </div>
        </div>
    )
}

export default ShowPanel