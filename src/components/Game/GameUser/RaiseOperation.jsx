import {useState, useEffect} from "react";
import IntegerStep from "./NumberIn";
import {useDispatch, useSelector} from "react-redux";
import {getOperation, setOperation} from "../../../features/GameProcess/UserOperation";
import {sendMsg} from "../GameMain";
import { selectUser } from "../../../features/user/userSlice";
import { getGameProcess } from "../../../features/GameProcess/GameProcess";
import { message } from 'antd';

function RaiseOperation(){

    const [isShow, setShow] = useState(false);
    const dispatch = useDispatch()
    const op = useSelector(getOperation)
    const nowUser = useSelector(selectUser)
    const nowGame = useSelector(getGameProcess)

    const [canDo,setDo] = useState(true)
    useEffect(()=>{
        if(nowUser.position != nowGame.nowPosition){
            setDo(false)
        }else if(!nowGame.nowUserDetail.AllowOp.includes("raise")){
            setDo(false)
        }else{
            setDo(true)
        }

    },[nowGame,nowUser])
    return (
        <div className="UserOperationItem">
            <div onClick={(event => setShow(true))} className={canDo ? "" :"GrayCover"} >
                <img width="60px" height="60px"src="/img/raise.png" />
                <span style={{fontSize:"19px"}}>多少加点</span>
            </div>
            <div className="UserOperationPanel" style={isShow ? {'display':'block'} : {'display':'none'}}>
                <span style={{fontSize:"30px"}}>投入积分：</span>
                <div style={{marginLeft: "20px", width: "550px",marginTop:"30px", marginBottom: "30px"}}>
                    <IntegerStep />
                </div>
                <div>
                    <div className="RaiseButton" onClick={(event)=>{
                        if(nowUser.position != nowGame.nowPosition){
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
                            if(allowOp.includes("raise")){
                                sendMsg("user_op",op.point,"raise","")
                                setShow(false)
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
                    }}>确认</div>
                    <div className="RaiseButton" onClick={(event=>setShow(false))}>算了</div>
                </div>
            </div>
        </div>
    )
}

export default RaiseOperation