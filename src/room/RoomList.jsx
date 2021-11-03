import './RoomList.css'
import CreateButton from "./CreateButton";
import RoomListPanel from "./RoomListPanel";
import AvatarPanel from "./AvatarPanel";
import LinePanel from "./LinePanel";

function RoomList() {

    return (
        <div className="Main-panel">
            <CreateButton />
            <RoomListPanel />
            <AvatarPanel />
            <LinePanel />
            {/*<div className="Line4-panel"/>*/}
        </div>
    )
}

export default RoomList
