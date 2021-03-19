import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Login from "./Login";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

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
                <Link to= {!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineTwo"> 
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                </div>
            
               
            </div>
        </div>    
    )
}


export default Header;
