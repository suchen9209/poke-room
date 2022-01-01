import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGameProcess} from "../../../features/GameProcess/GameProcess";
import axios from "axios";
import {setUser, selectUser} from "../../../features/user/userSlice";
import {sendMsg} from "../GameMain";


function FullScreenTip(data){

    const [isShow, setShow] = useState(false);

    const dispatch = useDispatch()

    const gameProcess = useSelector(getGameProcess)
    const nowUser = useSelector(selectUser)

    useEffect(()=>{
        if(gameProcess.nowPosition != nowUser.position){
            setShow(true)
        }
        setTimeout(()=>{
             setShow(false)
        },3000)

    },[gameProcess.nowPosition,nowUser.position])

    return (
        <div className="GameOperationPanel" style={isShow ? {'display':'block'} : {'display':'none'}} onClick={()=>{setShow(false)}}>
                <img src="/img/yourturn.png" width="100%"/>
            
        </div>
    )
}

export default FullScreenTip