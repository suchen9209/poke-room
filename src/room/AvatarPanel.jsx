import React, {useState} from "react";
import axios from "axios";
import request from "../service/request";
import {useSelector} from "react-redux";
import {selectUser} from "../features/user/userSlice";


function AvatarPanel(){
    const nowUser = useSelector(selectUser)
    console.log(nowUser)
    return (
        <div>
            <div className="Avatar-panel">
                <div className="User-name-span">
                    {nowUser.name}
                    {/*{this.props.data.username}*/}
                </div>
            </div>
            <LinePanel />
        </div>
    )
}
function LinePanel(){
    // const nowUser = useSelector((state)=>state.user.userInfo)
    const nowUser = useSelector(selectUser)
    console.log(nowUser)
    const nowPoint = "当前积分："+nowUser.point
    const nowLevel = "当前等级：狠之间"
    const nowStatus = "黑河"
    return (
        <div>
            <LineItem cn="Line1-panel" text={nowPoint} />
            <LineItem cn="Line2-panel" text={nowLevel} />
            <LineItem cn="Line3-panel" text={nowStatus} />
        </div>
    )
}

// class LineItem extends React.Component {
//
//     render() {
//         return (
//             <div className={this.props.className}>{this.props.text}</div>
//         );
//     }
// }

function LineItem(data) {
    return (
        <div className={data.cn}>{data.text}</div>
    );
}



export default AvatarPanel
