import React, {useEffect} from 'react';
import {BrowserRouter, Link, Route, Router,  useParams,useNavigate } from 'react-router-dom';
import './demo.css';
import './loaders.css';
import './styles.css';
import LoginPanel from "./LoginPanel";

function Background(){
    // let navigate = useNavigate();
    // useEffect(()=>{
    //     navigate("/room")
    // })

    return (
        <div className="container">
            <div className="login_main_panel">
                <LoginPanel />
                {/*<div className='login' id="register_panel" style="display: none">*/}
                {/*    <div className='login_title'>*/}
                {/*        <span>暴风加入</span>*/}
                {/*    </div>*/}
                {/*    <div className='login_fields'>*/}
                {/*        <div className='login_fields__user'>*/}
                {/*            <div className='icon'>*/}
                {/*                <img alt="" src='/static/img/login/user_icon_copy.png' />*/}
                {/*            </div>*/}
                {/*            <input id="register_name" name="register_name" placeholder='用户名' maxLength="16" type='text'*/}
                {/*                   autoComplete="off" value=""/>*/}
                {/*            <div className='validation'>*/}
                {/*                <img alt="" src='/static/img/login/tick.png' />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='login_fields__password'>*/}
                {/*            <div className='icon'>*/}
                {/*                <img alt="" src='/static/img/login/lock_icon_copy.png' />*/}
                {/*            </div>*/}
                {/*            <input id="register_pwd" name="pwd" placeholder='密码' maxLength="16" type='password'*/}
                {/*                   autoComplete="off" />*/}
                {/*            <div className='validation'>*/}
                {/*                <img alt="" src='/static/img/login/tick.png' />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='login_fields__password'>*/}
                {/*            <div className='icon'>*/}
                {/*                <img alt="" src='/static/img/login/lock_icon_copy.png' />*/}
                {/*            </div>*/}
                {/*            <input id="register_pwd2" name="pwd" placeholder='确认密码' maxLength="16" type='password'*/}
                {/*                   autoComplete="off" />*/}
                {/*            <div className='validation'>*/}
                {/*                <img alt="" src='/static/img/login/tick.png'/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='login_fields__submit' id="register_button">*/}
                {/*            <input type='button' value='入场'/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className='success'>*/}
                {/*    </div>*/}
                {/*    <div className='disclaimer'>*/}
                {/*        <p>欢迎来到阿拉斯加~<span id="show_login" style="color: #2fa0ec;cursor: pointer;">我有号！</span></p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>

    )

}
export default Background;