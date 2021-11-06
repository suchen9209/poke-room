import './RoomList.css'
import CreateButton from "./CreateButton";
import RoomListPanel from "./RoomListPanel";
import AvatarPanel from "./AvatarPanel";
import LinePanel from "./LinePanel";
import React from "react";
import axios from "axios";

class RoomList extends React.Component{
    constructor(params) {
        super(params);
    }
    render() {

        return (
            <div className="Main-panel">
                <CreateButton />
                <RoomListPanel />
                <AvatarPanel />
                {/*<LinePanel />*/}
                {/*<div className="Line4-panel"/>*/}
            </div>
        )
    }


}

export default RoomList
