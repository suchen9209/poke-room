import {useEffect, useState} from "react";
import axios from "axios";
import request from "../service/request";

function RoomListPanel() {

    const topLine = {
        marginTop : 10,
        fontSize:28,
    }
    const [roomListData, setListData] = useState([]);
    const [refresh,setRefresh] = useState(true)

    const roomLine = {
        marginTop : 10,
        fontSize:20,
        background:"url('/img/line_bg.png')",
        cursor: "pointer",
        "&:hover":{
            opacity:"100%",
        }
    }
    let column_1 = new ColumnBase(34,86);
    let column_2 = new ColumnBase(40,300);
    let column_3 = new ColumnBase(40,100);
    let column_4 = new ColumnBase(40,120);
    let column_5 = new ColumnBase(40,120);

    useEffect(()=>{
        if(refresh){
            request({
                url:"/room/list",
                method:"post",
                params:{},
                mode:"no-cors",
                withCredentials:true,
                async:true
            }).then(res=>{
                setListData(res.data.Data)
                console.log(res)
                setRefresh(false)
            })
        }
    },[refresh])

    let listItem_1 = roomListData.map((item, key) => {
        return (
            <div style={roomLine}>
                <span style={column_1}>{item.Id}</span>
                <span style={column_2}>{item.RoomName}</span>
                <span style={column_3}>suchot</span>
                <span style={column_4}>8</span>
                <span style={column_5}>DOING</span>
            </div>
        )
    })

    return (
        <div className="Room-list-panel">
            <div style={topLine}>
                <span style={column_1}>房间号</span>
                <span style={column_2}>房间名</span>
                <span style={column_3}>房主</span>
                <span style={column_4}>当前人数</span>
                <span style={column_5}>房间状态</span>
            </div>
            {listItem_1}
        </div>
    )
}

function ColumnBase(left,width){
    this.display = "inline-block";
    this.marginLeft = left;
    this.marginTop = 10;
    this.width = width;
    this.overflow = "hidden";

}

export default RoomListPanel
