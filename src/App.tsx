import React, {useEffect, useState} from 'react';
import ms from "./App.module.css"
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Routes from "./Routes";


function App() {

    return (
        <div className={ ms.body }>
            <div className={ms.header}>
                <Header/>
                <NavBar/>
            </div>
            <div className={ ms.content }>
                <Routes/>
            </div>
        </div>
    )
}

export default App;