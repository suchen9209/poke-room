import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "../../../features/user/userSlice";

function UserNameAndAvatar(){
    const nowUser = useSelector(selectUser)
    console.log("-------------")
    console.log(nowUser)

    return (
        <div>
            <div className="UserAvatar" >
                <img width="176px" height="176px" src={nowUser.avatar} alt={nowUser.name}/>
            </div>
            <div className="UserName" >
                {nowUser.name}
            </div>
        </div>

    )
}

export default UserNameAndAvatar