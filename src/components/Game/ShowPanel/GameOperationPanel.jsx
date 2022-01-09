import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGameProcess} from "../../../features/GameProcess/GameProcess";
import axios from "axios";
import {setUser} from "../../../features/user/userSlice";
import {sendMsg} from "../GameMain";


function GameOperationPanel(data){

    const [isShow, setShow] = useState(false);

    const dispatch = useDispatch()

    const gameProcess = useSelector(getGameProcess)

    // dispatch()
    useEffect(()=>{
        if(gameProcess.nowStatus === "online"){
            setShow(true)
        }
    },[gameProcess.nowStatus])

    return (
        <div className="GameOperationPanel" style={isShow ? {'display':'block'} : {'display':'none'}}>
            <div className="GameOperationButton" onClick={(event=>{
                setShow(false)
                sendMsg("game_op",0,"","start")
            })}>
                <img src="/img/start.png"/>
            </div>
            <div className="GameOperationButton" onClick={(event=>setShow(false))}>
                <img src="/img/end.png"/>
            </div>
        </div>
    )
}

export default GameOperationPanel