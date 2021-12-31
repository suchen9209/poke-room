import {useSelector} from "react-redux";
import {getOperation} from "../../../features/GameProcess/UserOperation";
import {sendMsg} from "../GameMain";

function FoldOperation(){
    const op = useSelector(getOperation);
    return (
        <div className="UserOperationItem" onClick={()=>{

            sendMsg("user_op",op.point,"fold","")
        }
        }>
            <div>
                <img width="60px" height="60px"src="/img/fold.png" />
                <span style={{fontSize:"19px"}}>弃牌</span>
            </div>
        </div>
    )
}

export default FoldOperation