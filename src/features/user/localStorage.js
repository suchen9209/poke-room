export const loadUserState = () =>{
    try{
        const serializedUserState = localStorage.getItem('user')
        if(serializedUserState === null){
            return {
                name:'You',
                point:0,
                userId:0,
                avatar:'/img/tou.png',
                position:0
            }
        }
        return JSON.parse(serializedUserState)
    }catch (err){
        return {
            name:'You',
            point:0,
            userId:0,
            avatar:'/img/tou.png',
            position:0
        }
    }
}

export const saveUserState = (user)=>{
    try {
        const serializedUserState =  JSON.stringify(user)
        localStorage.setItem('user',serializedUserState)
    }catch (err){

    }
}