import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';


function Header() {
    return (
        <div className="header">
            <Sidebar />
            <div className="header__nav">
                <div className="header__nav-item">
                    <Link to="/game">
                        Game
                    </Link> 
                </div>
                <div className="header__nav-item">
                    <Link to="/chat">
                        Chat
                    </Link> 
                </div>
                <div className="header__nav-item">
                    <Link to="/tournament">
                        Tournament
                    </Link> 
                </div>
                <div className="header__nav-item">
                    <Link to="/group">
                        Group
                    </Link> 
                </div>
                <div className="header__nav-item">
                    <Link to="/leaderboard">
                        Leaderboard
                    </Link> 
                </div>
                <div className="header__nav-item">
                    <Link to="/leaderboard">
                        Forums
                    </Link> 
                </div>
            </div>
            <div className="header__authentication">
                <div className="header__nav-item">
                    <Link to="/register">
                        Register
                    </Link> 
                </div>
                <div className="header__nav-item">
                    <Link to="/login">
                        Login
                    </Link> 
                </div>
            
               
            </div>
        </div>    
    )
}


export default Header;
