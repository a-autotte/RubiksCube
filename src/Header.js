import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <div className="header__nav">
                <Link to="/tutorial">
                    Tutorial
                </Link>
                 <Link to="/game">
                     Game
                 </Link> 
                <Link to="/chat">
                    Chat 
                </Link>
                <Link to="/tournament">
                    Tournament
                </Link>
                <Link to="/group">
                    Group
                </Link>
                <Link to="/leaderboard">
                    Leaderboard
                </Link>
                <Link to="/forum">
                    Forums
                </Link>
            </div>
            <div className="header__authentication">
                <Link to="/register">
                    Register
                </Link>
                <Link to="/login">
                    Login
                </Link>
               
            </div>
        </div>    
    )
}


export default Header;
