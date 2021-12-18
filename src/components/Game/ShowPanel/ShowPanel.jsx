import React from "react";
import Card from "../../Card/Card";

function ShowPanel(){
    return (
        <div className="ShowPanel">
            <div className="CardListLine">
                <div className="UserCardItem">
                    <Card color="diamond" value="0" />
                </div>
                <div className="UserCardItem">
                    <Card color="diamond" value="0" />
                </div>
                <div className="UserCardItem">
                    <Card color="diamond" value="0" />
                </div>
                <div className="UserCardItem">
                    <Card color="diamond" value="0" />
                </div>
                <div className="UserCardItem">
                    <Card color="diamond" value="0" />
                </div>
            </div>
        </div>
    )
}

export default ShowPanel