import './RoomList.css'
import CreateButton from "./CreateButton";
import RoomListPanel from "./RoomListPanel";

function RoomList() {

    return (
        <div className="Main-panel">
            <CreateButton />
            <RoomListPanel />
            <div className="Avatar-panel">4</div>
            <div className="User-name-span">5</div>

            <div className="Line1-panel">6</div>
            <div className="Line2-panel">7</div>
            <div className="Line3-panel">8</div>
            <div className="Line4-panel">9</div>
        </div>
    )
}

export default RoomList
