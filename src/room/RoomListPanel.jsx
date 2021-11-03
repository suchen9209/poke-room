
function RoomListPanel() {

    const topLine = {
        marginTop : 10,
        fontSize:28,
    }
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

    return (
        <div className="Room-list-panel">
            <div style={topLine}>
                <span style={column_1}>房间号</span>
                <span style={column_2}>房间名</span>
                <span style={column_3}>房主</span>
                <span style={column_4}>当前人数</span>
                <span style={column_5}>房间状态</span>
            </div>
            <div style={roomLine}>
                <span style={column_1}>1005</span>
                <span style={column_2}>suchot的房间</span>
                <span style={column_3}>suchot</span>
                <span style={column_4}>8</span>
                <span style={column_5}>DOING</span>
            </div>
            <div style={roomLine}>
                <span style={column_1}>1006</span>
                <span style={column_2}>wuke的房间</span>
                <span style={column_3}>wuke</span>
                <span style={column_4}>6</span>
                <span style={column_5}>WAITING</span>
            </div>
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
