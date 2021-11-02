function RoomListPanel() {

    // const buttonStyle = {
    //     display:"block",
    //     color : "#00a1a7",
    //     width: "100%",
    //     height:"100%",
    //     background: "url('/img/create_room.png')",
    //     border: "none",
    //     cursor: "pointer",
    //     borderRadius:14
    // };
    const baseLine = {
        marginTop : 10,
        fontSize:28,
        position:"absolute",
    }
    const baseColumn = {
        display: "inline-block",
        marginLeft:0
    }
    let column_1 = new ColumnBase(60);
    let column_2 = new ColumnBase(40);
    let column_3 = new ColumnBase(300);
    let column_4 = new ColumnBase(40);
    let column_5 = new ColumnBase(40);

    return (
        <div className="Room-list-panel">
            <div style={baseLine}>
                <span style={column_1}>房间号</span>
                <span style={column_2}>房间名</span>
                <span style={column_3}>房主</span>
                <span style={column_4}>当前人数</span>
                <span style={column_5}>房间状态</span>
            </div>
        </div>
    )
}

function ColumnBase(left){
    this.display = "inline-block";
    this.marginLeft = left;
    this.marginTop = 10;
}

export default RoomListPanel
