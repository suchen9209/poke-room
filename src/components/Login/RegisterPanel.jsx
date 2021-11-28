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

function RegisterPanel(){
    let navigate = useNavigate();
    const [isLogin, setLoginStatus] = useState(0);
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
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
                url:"user/register",
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
        <div className='login' id="register_panel">
            <div className='login_title'>
                <span>暴风加入</span>
            </div>
            <div className='login_fields'>
                <div className='login_fields__user'>
                    <div className='icon'>
                        <img alt="" src='/img/login/user_icon_copy.png' />
                    </div>
                    <input id="register_name" name="register_name" onChange={(event => setUname(event.target.value))}  placeholder='用户名' maxLength="16" type='text'
                           autoComplete="off"/>
                    <div className='validation'>
                        <img alt="" src='/img/login/tick.png' />
                    </div>
                </div>
                <div className='login_fields__password'>
                    <div className='icon'>
                        <img alt="" src='/img/login/lock_icon_copy.png' />
                    </div>
                    <input id="register_pwd" name="pwd"  onChange={(event => setPassword(event.target.value))}   placeholder='密码' maxLength="16" type='password'
                           autoComplete="off" />
                    <div className='validation'>
                        <img alt="" src='/img/login/tick.png' />
                    </div>
                </div>
                <div className='login_fields__password'>
                    <div className='icon'>
                        <img alt="" src='/img/login/lock_icon_copy.png' />
                    </div>
                    <input id="register_pwd2" name="pwd"  onChange={(event => setNewPassword(event.target.value))} placeholder='确认密码' maxLength="16" type='password'
                           autoComplete="off" />
                    <div className='validation'>
                        <img alt="" src='/img/login/tick.png'/>
                    </div>
                </div>
                <div className='login_fields__submit' id="register_button">
                    <input type='button' value='入场'/>
                </div>
            </div>
            <div className='success'>
            </div>
            <div className='disclaimer'>
                <p>欢迎来到阿拉斯加~<span id="show_login">我有号！</span></p>
            </div>
        </div>
            </div>
        </div>
    )

}
export default RegisterPanel
