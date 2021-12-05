import axios from "axios";

function sendRequest(url,method,params,async=true){
    let data,err
    axios({
        url:url,
        method:method,
        baseURL:"http://localhost:8080/v2/",
        params:params,
        mode:"no-cors",
        withCredentials:true,
        async:async
    }).then(res=>{
        data = res
    }).catch((error)=>{
        err = error
    })
    return [data,err]
}

export default sendRequest