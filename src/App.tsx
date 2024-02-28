import React from 'react';
import './App.css';
import Header from './header/Header';
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default App;
