import React from "react";

function LinePanel(){

    const nowPoint = "当前积分：1000"
    const nowLevel = "当前等级：狠之间"
    const nowStatus = "黑河"
    return (
        <div>
            <LineItem className="Line1-panel" text={nowPoint} />
            <LineItem className="Line2-panel" text={nowLevel} />
            <LineItem className="Line3-panel" text={nowStatus} />
        </div>
    )
}

class LineItem extends React.Component {

    render() {
        return (
            <div className={this.props.className}>{this.props.text}</div>
        );
    }
}

export default LinePanel