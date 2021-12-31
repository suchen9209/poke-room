import {sendMsg} from "../GameMain";
import {useSelector} from "react-redux";
import {getOperation} from "../../../features/GameProcess/UserOperation";

function CallOperation(){
    const op = useSelector(getOperation);
    return (
        <div className="UserOperationItem" onClick={()=>{

            sendMsg("user_op",op.point,"call","")
        }
        }>
            <div>
                <img width="60px" height="60px"src="/img/call.png" />
                <span style={{fontSize:"19px"}}>跟</span>
            </div>
        </div>
    )
}

export default CallOperation