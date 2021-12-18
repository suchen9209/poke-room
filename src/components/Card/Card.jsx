import "./puker.css"

function Card(data){
    let class_name = "face front puker-" + data.color + data.value;
    const symbol_arr = {
        spade   : "♠️",
        heart   : "❤️",
        diamond : "♦️",
        club    : "♣️",
        joker   : "🃏",
    }
    let show_str = symbol_arr[data.color]
    let num = data.value
    if(data.value === '11'){
        num = 'J'
    }
    if(data.value === '12'){
        num = 'Q'
    }
    if(data.value === '11'){
        num = 'K'
    }
    if(data.value === '14'){
        num = 'A'
    }
    if(data.value === '0'){
        num = ''
        show_str = ''
    }

    return (
        <div>
            <div className="card">
                <div className={class_name} />
            </div>
            <div style={{"display":"inline-block"}}>
                {/*{show_str} {num}*/}
            </div>
        </div>

    )
}

export default Card