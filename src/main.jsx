import React from 'react'
import ReactDOM from 'react-dom'
import RoomList from "./room/RoomList";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContentMain from "./components/ContentMain";
import RoomListPanel from "./room/RoomListPanel";
import Background from "./components/Login/Background";
import RegisterPanel from "./components/Login/RegisterPanel";
import LoginPanel from "./components/Login/LoginPanel";
import GameMain from "./components/Game/GameMain";
import {Provider} from "react-redux";
import {createStore} from "redux";
import store from "./store";
import {saveUserState} from "./features/user/localStorage";

store.subscribe(()=>{
    saveUserState(store.getState().userInfo)
})

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPanel />} />
            <Route path="login" element={<LoginPanel />} />
            <Route path="register" element={<RegisterPanel />} />
            <Route path="room" element={<RoomList />} />
            <Route path="invoices" element={<RoomListPanel />} />
            <Route path="gameRoom/:id" element={<GameMain />} />
            <Route path="gameRoom" element={<GameMain />} />
        </Routes>
    </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
)
