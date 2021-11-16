import React from 'react'
import ReactDOM from 'react-dom'
import RoomList from "./room/RoomList";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContentMain from "./components/ContentMain";
import RoomListPanel from "./room/RoomListPanel";
import Background from "./components/Login/Background";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Background />} />
            <Route path="room" element={<RoomList />} />
            <Route path="invoices" element={<RoomListPanel />} />
        </Routes>
    </BrowserRouter>
    ,
  document.getElementById('root')
)
