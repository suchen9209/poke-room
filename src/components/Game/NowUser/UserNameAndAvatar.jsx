import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "../../../features/user/userSlice";

function UserNameAndAvatar(){
    const nowUser = useSelector(selectUser)

    return (
        <div>
            <div className="UserAvatar" >
                <img width="176px" height="176px" src={nowUser.userInfo.avatar} alt={nowUser.userInfo.name}/>
            </div>
            <div className="UserName" >
                {nowUser.userInfo.name}
            </div>
        </div>

    )
}

export default UserNameAndAvatar