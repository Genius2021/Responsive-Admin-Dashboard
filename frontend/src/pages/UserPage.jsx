import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationOn, Publish } from "@mui/icons-material";
import "./UserPage.css";
import { Link } from "react-router-dom";


function UserPage() {
    return (
        <div className="user__page">
            <div className="userTitleContainer">
                <h1 className="user__title">Edit User</h1>
                <Link to="/createUser">
                  <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="user__container">
                <div className="user__show">
                    <div className="user__show__top">
                        <img src="/images/img2.jpg" alt="" className="user__show__image" />
                        <div className="user__show__top__title">
                          <span className="user__show__username">John Doe</span>
                          <span className="user__show__job__title">Software Engineer</span>
                        </div>
                    </div>
                    <div className="user__show__bottom">
                        <span className="user__show__title">Account Details</span>
                        <div className="user__show__info">
                            <PermIdentity  className="user__show__icon" />
                            <span className="user__show__info__title">johndoe22</span>
                        </div>
                        <div className="user__show__info">
                            <CalendarToday  className="user__show__icon" />
                            <span className="user__show__info__title">15.10.1992</span>
                        </div>
                        <span className="user__show__title">Contact Details</span>
                        <div className="user__show__info">
                            <PhoneAndroid  className="user__show__icon" />
                            <span className="user__show__info__title">+123 094 032</span>
                        </div>
                        <div className="user__show__info">
                            <MailOutline  className="user__show__icon" />
                            <span className="user__show__info__title">johndoe@gmail.com</span>
                        </div>
                        
                        <div className="user__show__info">
                            <LocationOn  className="user__show__icon" />
                            <span className="user__show__info__title">Miami, USA</span>
                        </div>
                    </div>
                </div>
                <div className="user__update">
                    <span className="user__update__title">Edit</span>
                    <form className="user__update__form">
                        <div className="user__update__left">
                            <div className="first__set">
                                <div className="user__update__item">
                                   <label >First Name</label>
                                   <input type="text" placeholder="John" className="user__update__input" />
                                </div>
                                <div className="user__update__item">
                                   <label >Lastname</label>
                                   <input type="text" placeholder="Doe" className="user__update__input" />
                                </div>
                            </div>
                    
                            <div className="second__set">
                              <div className="user__update__item">
                                <label >Email</label>
                                <input type="email" placeholder="johndoe@gmail.com" className="user__update__input" />
                              </div>
                              <div className="user__update__item">
                                <label >Mobile Number</label>
                                <input type="tel" placeholder="+123 094 032" className="user__update__input" />
                              </div>
                            </div>
                            
                            <div className="user__update__item">
                                <label >Address</label>
                                <input type="text" placeholder="Miami, USA" className="user__update__input" />
                            </div>
                        </div>
                        <div className="user__update__right">
                            <div className="user__update__upload">
                                <img src="/images/img2.jpg" className="user__update__image" alt="" />
                                <label htmlFor="file"><Publish className="user__update__image__icon" /></label>
                                <input type="file" id="file" style={{display: "none" }} />
                            </div>
                           <button type="submit" className="update__button">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserPage
