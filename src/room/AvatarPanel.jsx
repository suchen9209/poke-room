import React from "react";

class AvatarPanel extends React.Component{
    constructor(params) {
        super(params);
        console.log(this.props.data)
    }
render(){
    return (
        <div className="Avatar-panel">
            <div className="User-name-span">
                {/*{this.props.data.username}*/}
            </div>
        </div>
    )
}


}

export default AvatarPanel
