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
        this.setState({
            username:"",
            point:0
        })
        axios({
            url:"user/login",
            method:"post",
            baseURL:"http://localhost:8080/v2/",
            params:{
                "uname" : "suchot",
                "password": "123456"
            },
            mode:"no-cors",
            withCredentials:false,
            async:true
        }).then(res=>{
            console.log(res)
            this.setState({
                username:res.data.Data.Name,
                point:res.data.Data.Point
            })
        })
    }
    render() {

        return (
            <div className="Main-panel">
                <CreateButton />
                <RoomListPanel />
                <AvatarPanel data={this.state} />
                <LinePanel />
                {/*<div className="Line4-panel"/>*/}
            </div>
        )
    }


}

export default RoomList
