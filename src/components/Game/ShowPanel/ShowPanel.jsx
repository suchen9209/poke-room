import React from "react";
import Card from "../../Card/Card";
import {Link} from "react-router-dom";

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

    return (
        <div className="ShowPanel">
            <div className="CardListLine">
                {cardList}
            </div>
            <div>
                It's Turn to Suchot
            </div>
        </div>
    )
}

export default ShowPanel