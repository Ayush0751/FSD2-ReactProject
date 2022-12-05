import React from "react";
import noStyles from "../Assets/css/Notifications.module.css";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "./Navbar/Navbar";
import { Link } from 'react-router-dom';

const Notifications = () => {
    return (
        <div>
            <Navbar />
            <div className={noStyles.main}>
                <Link to='/settings'><button><FaChevronLeft className={noStyles.leftarrow}/></button></Link>
                <h1>Notifications</h1>
            </div>
            <div className={noStyles.tt}>
            <div className={noStyles.email}>
                <h1>Email Notifications</h1>
                <p>You may unsubscribe entirely from marketing communication, or from a specific newsfeed activity. Others emails such as the status of your deposits, withdarwals, requests to receive documents, as well as technical notifications may not be opted-out.</p>
            </div>
            <div className={noStyles.embd}>
                
                <p>Get daily market updates, promotions and trading tips</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                    
                <p>Someone started following you</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                    
                <p>Someone commented in my post</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                    
                <p>Someone started copying me</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                    
                <p>One of my Facebook friends joined Zrading</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                
            </div>
            </div>
            <div className={noStyles.bb}>
            <div className={noStyles.web}>
                <h1>Web Push Notifications</h1>
                
            </div>
            <div className={noStyles.webbd}>
                <p>Trading</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                <p>Account</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                <p>Social</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                <p>Volatility Alerts</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                <p>Updates And Promotions</p>
                <label className={noStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={noStyles.slider}></span> 
                    </label>
                
            </div>
            </div>
        </div>
    );
}

export default Notifications;