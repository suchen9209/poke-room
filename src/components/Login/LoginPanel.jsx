import React, {Component, useEffect, useState} from 'react';
import {BrowserRouter, Link, Route, Router,  useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import RoomList from "../../room/RoomList";

let uname = ''
let password = ''


function SetUname(e){
    uname = e.target.value
}

function SetPassword(e){
    password = e.target.value
}

// function loginAction(){
//     axios({
//         url:"user/login",
//         method:"post",
//         baseURL:"http://localhost:8080/v2/",
//         params:{
//             uname:uname,
//             password:password
//         },
//         mode:"no-cors",
//         withCredentials:true,
//         async:true
//     }).then(res=>{
//         console.log(res)
//         localStorage.UserId = res.data.Data.Id
//         localStorage.UserName = res.data.Data.Name
//         localStorage.Point = res.data.Data.Point
//         // let navigate = useNavigate();
//         // useEffect(()=>{
//         //     navigate("/room")
//         // })
//     }).catch((error)=>{
//         alert(error.message)
//         console.log('Error', error.message);
//     })
// }


function LoginPanel(){
    let navigate = useNavigate();
    const [isLogin, setLoginStatus] = useState(false);
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [clickButton, setClick] = useState(false);
    useEffect(()=>{
        if (isLogin){
            console.log('sdfsd121fsdf')
        }
        return ()=>{
            console.log('sdfsdfsdf')

        }
    },[isLogin])

    useEffect(()=>{
        console.log(password)
        console.log(clickButton)
        console.log(uname)
        if(clickButton && uname !== '' && password !==''){
            setClick(false)
            axios({
                url:"user/login",
                method:"post",
                baseURL:"http://localhost:8080/v2/",
                params:{
                    uname:uname,
                    password:password
                },
                mode:"no-cors",
                withCredentials:true,
                async:true
            }).then(res=>{
                console.log(res)
                localStorage.UserId = res.data.Data.Id
                localStorage.UserName = res.data.Data.Name
                localStorage.Point = res.data.Data.Point

                setLoginStatus(true)
                // useEffect(()=>{
                navigate("/room")
                // })
            }).catch((error)=>{
                alert(error.message)
                console.log('Error', error.message);
            })
        }

    },[uname,password,clickButton])

    return(
        <div className="container">
            <div className="login_main_panel">
        <div className='login' id="login_panel">
            <div className='login_title'>
                <span>PY登录</span>
            </div>
            <div className='login_fields'>
                <div className='login_fields__user'>
                    <div className='icon'>
                        <img alt="" src='/img/login/user_icon_copy.png' />
                    </div>
                    <input id="login_name" onChange={(event => setUname(event.target.value))} name="login" placeholder='用户名' maxLength="16" type='text'
                           autoComplete="off" />
                    <div className='validation'>
                        <img alt="" src='/img/login/tick.png' />
                    </div>
                </div>
                <div className='login_fields__password'>
                    <div className='icon'>
                        <img alt="" src='/img/login/lock_icon_copy.png' />
                    </div>
                    <input id="login_pwd" onChange={(event => setPassword(event.target.value))} name="pwd" placeholder='密码' maxLength="16" type='password'
                           autoComplete="off" />
                    <div className='validation'>
                        <img alt="" src='/img/login/tick.png' />
                    </div>
                </div>
                <div onClick={()=>setClick(true)} className='login_fields__submit' id="login_button">
                    <input type='button' value='登录' />
                </div>
            </div>
            {/*<div className='success'>*/}
            {/*</div>*/}
            {/*<div className='disclaimer'>*/}
            {/*    <p>欢迎来到阿拉斯加~<span id="show_register" style={{color: '#2fa0ec',cursor: 'pointer'}}>我没号！</span></p>*/}
            {/*</div>*/}
        </div>
            </div>
        </div>
    )

}
export default LoginPanel
// function LoginPanel(){
//     // let navigate = useNavigate();
//     // useEffect(()=>{
//     //     navigate("/room")
//     // })
//
//
//
//     return (
//
//     )
//
// }
