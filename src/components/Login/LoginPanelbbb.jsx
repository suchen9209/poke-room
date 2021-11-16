import React, {Component, useEffect} from 'react';
import {BrowserRouter, Link, Route, Router,  useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import RoomList from "../../room/RoomList";

export default class LoginPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            uname:'',
            password:'',
        }
    }
    UnameChange(e){
        this.setState({
            uname:e.target.value
        })
    }
    PwdChange(e){
        this.setState({
            password:e.target.value
        })
    }

    loginAction = ()=>{
        console.log(this.state)
        axios({
            url:"user/login",
            method:"post",
            baseURL:"http://localhost:8080/v2/",
            params:this.state,
            mode:"no-cors",
            withCredentials:true,
            async:true
        }).then(res=>{
            localStorage.UserId = res.data.Data.Id
            localStorage.UserName = res.data.Data.Name
            localStorage.Point = res.data.Data.Point
            this.props.history.push('/room')
        }).catch((error)=>{
            alert(error.message)
            console.log('Error', error.message);
        })
    }


    render() {
        return(
            <div className='login' id="login_panel">
                <div className='login_title'>
                    <span>PY登录</span>
                </div>
                <div className='login_fields'>
                    <div className='login_fields__user'>
                        <div className='icon'>
                            <img alt="" src='/img/login/user_icon_copy.png' />
                        </div>
                        <input id="login_name" onChange={this.UnameChange.bind(this)} name="login" placeholder='用户名' maxLength="16" type='text'
                               autoComplete="off" />
                        <div className='validation'>
                            <img alt="" src='/img/login/tick.png' />
                        </div>
                    </div>
                    <div className='login_fields__password'>
                        <div className='icon'>
                            <img alt="" src='/img/login/lock_icon_copy.png' />
                        </div>
                        <input id="login_pwd" onChange={this.PwdChange.bind(this)} name="pwd" placeholder='密码' maxLength="16" type='password'
                               autoComplete="off" />
                        <div className='validation'>
                            <img alt="" src='/img/login/tick.png' />
                        </div>
                    </div>
                    <div onClick={this.loginAction} className='login_fields__submit' id="login_button">
                        <input type='button' value='登录' />
                    </div>
                </div>
                <div className='success'>
                </div>
                <div className='disclaimer'>
                    <p>欢迎来到阿拉斯加~<span id="show_register" style={{color: '#2fa0ec',cursor: 'pointer'}}>我没号！</span></p>
                </div>
            </div>
        )
    }
}
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
