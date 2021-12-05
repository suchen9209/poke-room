import React, {useState} from "react";
import axios from "axios";
import request from "../service/request";

class AvatarPanel extends React.Component{
    constructor(params) {
        super(params);
        this.state = {
            username:"",
            point : 0
        }
        console.log(this.props.data)

    }

    componentDidMount() {
        setTimeout(()=>{
                request({
                    url:"user/info",
                    method:"post",
                    params:{
                    },
                    mode:"no-cors",
                    withCredentials:true,
                    async:true
                }).then(res=>{
                    console.log(res)
                    this.setState({
                        username:res.data.Data.Name,
                        point:res.data.Data.Point
                    })
                })
        },1000

        )

    }

    render(){
        return (
            <div>
                <div className="Avatar-panel">
                    <div className="User-name-span">
                        {this.state.username}
                        {/*{this.props.data.username}*/}
                    </div>
                </div>
                <LinePanel point={this.state.point}/>
            </div>
        )
    }

}
function LinePanel(data){
    const nowPoint = "当前积分："+data.point
    const nowLevel = "当前等级：狠之间"
    const nowStatus = "黑河"
    return (
        <div>
            <LineItem className="Line1-panel" text={nowPoint} />
            <LineItem className="Line2-panel" text={nowLevel} />
            <LineItem className="Line3-panel" text={nowStatus} />
        </div>
    )
}

class LineItem extends React.Component {

    render() {
        return (
            <div className={this.props.className}>{this.props.text}</div>
        );
    }
}



export default AvatarPanel
