import React, {useEffect} from 'react';
import {BrowserRouter, Link, Route, Router,  useParams,useNavigate } from 'react-router-dom';
import './demo.css';
import './loaders.css';
import './styles.css';
import LoginPanel from "./LoginPanel";
import RegisterPanel from "./RegisterPanel";

function Background(){
    // let navigate = useNavigate();
    // useEffect(()=>{
    //     navigate("/room")
    // })
    useEffect()

    return (
        <div className="container">
            <div className="login_main_panel">
                <LoginPanel />
                <RegisterPanel />
            </div>
        </div>

    )

}
export default Background;