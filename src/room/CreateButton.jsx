import React from "react";
import sendRequest from "../tool/request";
import request from "../service/request";

class CreateButton extends React.Component{
    constructor(params) {
        super(params);
    }

    createRoom = () =>{
        let requestParams = {

        }
        request({
            url:"/room/create",
            method:"post",
            params:{
            },
            mode:"no-cors",
            withCredentials:true,
            async:true
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.error(err)
        })

    }

    render() {
        const buttonStyle = {
            display:"block",
            color : "#00a1a7",
            width: "100%",
            height:"100%",
            background: "url('/img/create_room.png')",
            border: "none",
            cursor: "pointer",
            borderRadius:14
        };
        return (
            <div className="Creat-button">
                <button onClick={this.createRoom} style={buttonStyle}/>
            </div>
        )
    }




}

export default CreateButton
