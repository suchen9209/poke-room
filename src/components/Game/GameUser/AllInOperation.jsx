import {sendMsg} from "../GameMain";
import {useSelector} from "react-redux";
import {getOperation} from "../../../features/GameProcess/UserOperation";

function AllInOperation(){
    const op = useSelector(getOperation);
    return (
        <div className="UserOperationItem" onClick={()=>{

            sendMsg("user_op",op.point,"allin","")
        }
        }>
            <div>
                <img width="60px" height="60px"src="/img/allin.png" />
                <span style={{fontSize:"19px"}}>ALLIN</span>
            </div>
        </div>
    )
}

export default AllInOperation