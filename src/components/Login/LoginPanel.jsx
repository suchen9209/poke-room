import React, {Component, useEffect, useReducer, useState} from 'react';
import {BrowserRouter, Link, Route, Router,  useParams,useNavigate } from 'react-router-dom';
import axios from "axios";

import {useDispatch, useSelector} from "react-redux";
import {selectUser, setUser} from "../../features/user/userSlice";

let uname = ''
let password = ''

function SetUname(e){
    uname = e.target.value
}

function SetPassword(e){
    password = e.target.value
}

function LoginPanel(){
    let navigate = useNavigate();
    const [isLogin, setLoginStatus] = useState(false);
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [clickButton, setClick] = useState(false);
    const dispath = useDispatch()
    useEffect(()=>{
        if (isLogin){
            // console.log('sdfsd121fsdf')
        }
        return ()=>{
            // console.log('sdfsdfsdf')

        }
    },[isLogin])

    useEffect(()=>{
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
                let tmpUser = {
                    name : res.Data.Name,
                    point : res.Data.Point,
                    avatar : '/img/tou.png',
                    userId : res.Data.Id
                }
                dispath(setUser(tmpUser))
                // console.log(user.getState())
                setLoginStatus(true)
                navigate("/room")
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
