import {useState} from "react";
import IntegerStep from "./NumberIn";

function RaiseOperation(){

    const [isShow, setShow] = useState(false);
    return (
        <div className="UserOperationItem">
            <div onClick={(event => setShow(true))} >
                <img width="60px" height="60px"src="/img/raise.png" />
                <span style={{fontSize:"19px"}}>多少加点</span>
            </div>
            <div className="UserOperationPanel" style={isShow ? {'display':'block'} : {'display':'none'}}>
                <span style={{fontSize:"30px"}}>投入积分：</span>
                <div style={{marginLeft: "20px", width: "550px",marginTop:"30px", marginBottom: "30px"}}>
                    <IntegerStep />
                </div>
                <div>
                    <div className="RaiseButton" onClick={(event=>setShow(false))}>确认</div>
                    <div className="RaiseButton" onClick={(event=>setShow(false))}>算了</div>
                </div>
            </div>
        </div>
    )
}

export default RaiseOperation