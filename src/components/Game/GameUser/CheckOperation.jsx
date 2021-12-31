import {useSelector} from "react-redux";
import {getOperation} from "../../../features/GameProcess/UserOperation";
import {sendMsg} from "../GameMain";

function CheckOperation(){
    const op = useSelector(getOperation);
    return (
        <div className="UserOperationItem" onClick={()=>{

            sendMsg("user_op",op.point,"check","")
        }
        }>
            <div>
                <img width="60px" height="60px"src="/img/check.png" />
                <span style={{fontSize:"19px"}}>看看</span>
            </div>
        </div>
    )
}

export default CheckOperation