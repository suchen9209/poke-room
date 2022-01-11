import {sendMsg} from "../GameMain";
import {useSelector} from "react-redux";
import {getOperation} from "../../../features/GameProcess/UserOperation";
import { selectUser } from "../../../features/user/userSlice";
import { getGameProcess } from "../../../features/GameProcess/GameProcess";
import { message } from 'antd';
import { useEffect, useState } from "react";


function CallOperation(){
    const op = useSelector(getOperation);
    const nowUser = useSelector(selectUser)
    const nowGame = useSelector(getGameProcess)
    const [canDo,setDo] = useState(true)
    useEffect(()=>{
        if(nowGame.nowStatus !== 'inGame'){
            setDo(false)
        }else if(nowUser.position !== nowGame.nowPosition){
            setDo(false)
        }else if(JSON.stringify(nowGame.nowUserDetail) !== "{}" && !nowGame.nowUserDetail.AllowOp.includes("call")){
            setDo(false)
        }else{
            setDo(true)
        }

    },[nowGame,nowUser])
    return (
        <div className="UserOperationItem" onClick={()=>{
            if(nowUser.position !== nowGame.nowPosition){
                message.error({
                    content:"急什么，没到你呢",
                    className:"message-custom-error",
                    style:{
                        marginTop:"10vh"
                    }
                })
            }else{
                let allowOp = nowGame.nowUserDetail.AllowOp
                // let allowOp = [1,2,3]
                if(allowOp.includes("call")){
                    sendMsg("user_op",op.point,"call","")
                }else{
                    message.error({
                        content:"你不能执行该操作",
                        className:"message-custom-error",
                        style:{
                            marginTop:"10vh"
                        }
                    })
                    
                }
            }
        }
        }>
            <div  className={canDo ? "" :"GrayCover"} >
                <img width="60px" height="60px"src="/img/call.png" />
                <span style={{fontSize:"19px"}}>跟</span>
            </div>
        </div>
    )
}

export default CallOperation