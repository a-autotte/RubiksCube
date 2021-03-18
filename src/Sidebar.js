import React, { useState } from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr"; 
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

function Sidebar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        
        <div className="sidebar">
            <div className="sidebar__nav">
                <Link to="#" className="sidebar-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'sidebar-nav-menu active' : 'sidebar-nav-menu'}>
                <ul className='sidebar-menu-items' onClick={showSidebar}>
                <li className="sidebar-navbar-toggle">
                    <Link to="#" className='sidebar-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                <li className="sidebar-nav-text">
                    <Link to="/home">
                        <AiIcons.AiFillHome/> 
                        Home
                    </Link>
                </li>
                <li className="sidebar-nav-text">
                    <Link to="/tutorial">
                        <FaIcons.FaBook />
                        Tutorial 
                    </Link>
                </li>
                <li className="sidebar-nav-text">
                    <Link to="/game">
                        <FaIcons.FaGamepad/>
                        Game
                    </Link>
                </li>
                <li className="sidebar-nav-text">
                    <Link to="/chat">
                        <BsIcons.BsChatSquareDots/>
                        Chat
                    </Link>
                </li>
                <li className="sidebar-nav-text">
                    <Link to="/tournament">
                        <RiIcons.RiSwordFill/>
                        Tournament
                    </Link>
                </li>
                <li className="sidebar-nav-text">
                    <Link to="/group">
                        <GrIcons.GrGroup/>
                        Group
                    </Link>
                </li>
                <li className="sidebar-nav-text">
                    <Link to="/leaderboard">
                        <IoIcons.IoIosPodium/>
                        Leaderboard
                    </Link>
                </li>
                <li className="sidebar-nav-text">
                    <Link to="/forum">
                        <MdIcons.MdForum/>
                        Forums
                    </Link>
                </li>
            </ul>
            {/*</div><div className="sidebar__authentication">
                <Link to="/register">
                    Register
                </Link>
                <Link to="/login">
                    Login
                </Link>
               
    </div>*/}
                
                
            </nav>
                
        </div>    
    )
}

export default Sidebar;
