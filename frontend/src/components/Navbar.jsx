import React from 'react'
import "./Navbar.css";
import Menu from '@mui/icons-material/Menu';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { closeSidebar, openSidebar } from '../Redux/actions/sidebarActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Navbar() {
    const whatState = useSelector(state => state.sidebarState);
    const { sidebarState } = whatState;
    const dispatch = useDispatch();

    const handleClick = ()=> {
        sidebarState && dispatch(closeSidebar(sidebarState));
        !sidebarState && dispatch(openSidebar(sidebarState));
    }
    return (
        <>
            <div className="navbar__wrapper">
                <div className="top__left">
                  <Menu className="menu__icon" onClick={handleClick} />
                  <Link to="/">
                     <span className="logo">Admin</span>
                  </Link>
                </div>
                <div className="top__right">
                    <div className="navbar__icon__container">
                        <NotificationsNone />
                        <span className="navbar__icon__badge">
                            2
                        </span>
                    </div>
                    <div className="navbar__icon__container">
                        <Language />
                        <span className="navbar__icon__badge">
                            2
                        </span>
                    </div>
                    <div className="navbar__icon__container">
                        <Settings />
                    </div>
                    <img src="/images/img3.jpg" alt="nav__avatar" className="nav__avatar" />
                </div>
             </div>
        </>
    )
}

export default Navbar;
