import './GameMain.css'
import React from "react";
import {useParams} from "react-router";

// class GameMain extends React.Component{
function GameMain(){
    let { id } = useParams();

    const ws = new WebSocket('ws://localhost:8080/v2/room/join/'+id);
    ws.onmessage =  (event)=> {
        console.log(event)
    }


    // render() {
        return (
            <div className="MainPanel">
                <div className="ShowPanel" />

                <div className="UserPanel" >
                    <div className="UserAvatar" />
                    <div className="UserName" />
                    <div className="UserOperationList">
                        <div className="UserOperationItem" />
                        <div className="UserOperationItem" />
                        <div className="UserOperationItem" />
                        <div className="UserOperationItem" />
                        <div className="UserOperationItem" />
                    </div>
                    <div className="UserInfo" />
                    <div className="UserCard" >
                        <div className="UserCardItem"/>
                        <div className="UserCardItem"/>
                   </div>
                </div>

                <div className="Position1">
                    <div className="PanelAvatar"/>
                    <div className="PanelName"/>
                    <div className="PanelCard"/>
                    <div className="PanelPoint"/>
                </div>
                <div className="Position2">
                    <div className="PanelAvatar"/>
                    <div className="PanelName"/>
                    <div className="PanelCard"/>
                    <div className="PanelPoint"/>
                </div>
                <div className="Position3">
                    <div className="PanelAvatar"/>
                    <div className="PanelName"/>
                    <div className="PanelCard"/>
                    <div className="PanelPoint"/>
                </div>
                <div className="Position4">
                    <div className="PanelAvatar"/>
                    <div className="PanelName"/>
                    <div className="PanelCard"/>
                    <div className="PanelPoint"/>
                </div>
                <div className="Position5">
                    <div className="PanelAvatar"/>
                    <div className="PanelName"/>
                    <div className="PanelCard"/>
                    <div className="PanelPoint"/>
                </div>
                <div className="Position6">
                    <div className="PanelAvatar"/>
                    <div className="PanelName"/>
                    <div className="PanelCard"/>
                    <div className="PanelPoint"/>
                </div>
                <div className="Position7">
                    <div className="PanelAvatar"/>
                    <div className="PanelName"/>
                    <div className="PanelCard"/>
                    <div className="PanelPoint"/>
                </div>
                <div className="Position8">
                    <div className="PanelAvatar"/>
                    <div className="PanelName"/>
                    <div className="PanelCard"/>
                    <div className="PanelPoint"/>
                </div>
            </div>
        )
    // }


}

export default GameMain
