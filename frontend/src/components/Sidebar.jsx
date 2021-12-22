import React from 'react';
import "./Sidebar.css";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { Home, Leaderboard, Add, Search, AttachMoney, TrendingUp, Person, Storefront, PointOfSale, Email, Feedback, Message, StickyNote2, ManageAccounts, Error } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <>
            <div className="sidebar__wrapper">
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Dashboard</h3>
                    <ul className="sidebar__list">
                    <Link to="/">
                        <li className="sidebar__list__item active">
                            <Home /> Home
                        </li>
                    </Link>
                      
                      <li className="sidebar__list__item">
                          <Leaderboard className="sidebar__icon" /> Analytics
                      </li>
                      <li className="sidebar__list__item">
                          <AttachMoney className="sidebar__icon" /> Sales
                      </li>
                      <li className="sidebar__list__item">
                          <TrendingUp className="sidebar__icon" /> Trending
                      </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Quick Menu</h3>
                    <ul className="sidebar__list">
                        <ul className="sidebar__list__item drop__down">
                            <Person /> Users <ArrowDropDown className="arrow__drop__down" />
                            <div className="drop__down__item">
                                <Link to="/users">
                                    <li className="sidebar__list__item" >
                                    <Person className="sidebar__icon" /> Users
                                    </li>
                                </Link>
                                <Link to="/createUser">
                                    <li className="sidebar__list__item" >
                                    <Add className="sidebar__icon" /> Create New User
                                    </li>
                                </Link>
                                <Link to="/findUser" aria-disabled>
                                    <li className="sidebar__list__item">
                                    <Search className="sidebar__icon" />Search User
                                    </li>
                                </Link>
                            </div>
                        </ul>
                        <ul className="sidebar__list__item drop__down">
                            <Storefront className="sidebar__icon" /> Products <ArrowDropDown className="arrow__drop__down" />
                            <div className="drop__down__item">

                                <Link to="/products">
                                    <li className="sidebar__list__item" >
                                    <Storefront className="sidebar__icon" />Products
                                    </li>
                                </Link>
                                <Link to="/newProduct">
                                    <li className="sidebar__list__item" >
                                    <Add className="sidebar__icon" /> Create New Product
                                    </li>
                                </Link>
                                <Link to="/findProduct" aria-disabled>
                                    <li className="sidebar__list__item">
                                    <Search className="sidebar__icon" />Search Product
                                    </li>
                                </Link>
                            </div>
                        
                        </ul>
                      
                      <li className="sidebar__list__item">
                          <PointOfSale className="sidebar__icon" /> Transactions
                      </li>
                      <li className="sidebar__list__item">
                          <StickyNote2 className="sidebar__icon" /> Reports
                      </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Notifications</h3>
                    <ul className="sidebar__list">
                      <li className="sidebar__list__item">
                          <Email /> Mail
                      </li>
                      <li className="sidebar__list__item">
                          <Feedback className="sidebar__icon" /> Feedback
                      </li>
                      <li className="sidebar__list__item">
                          <Message className="sidebar__icon" /> Messages
                      </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Staff</h3>
                    <ul className="sidebar__list">
                      <li className="sidebar__list__item">
                          <ManageAccounts /> Manage
                      </li>
                      <li className="sidebar__list__item">
                          <Leaderboard className="sidebar__icon" /> Analytics
                      </li>
                      <li className="sidebar__list__item">
                          <AttachMoney className="sidebar__icon" /> Sales
                      </li>
                      <li className="sidebar__list__item">
                          <Error className="sidebar__icon" /> Reports
                      </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
