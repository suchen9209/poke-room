function CreateButton() {

    const buttonStyle = {
        display:"block",
        color : "#00a1a7",
        width: "100%",
        height:"100%",
        background: "url('/img/create_room.png')",
        border: "none",
        cursor: "pointer",
        borderRadius:14
    };

    return (
        <div className="Creat-button">
            <button style={buttonStyle}/>
        </div>
    )
}

export default CreateButton
