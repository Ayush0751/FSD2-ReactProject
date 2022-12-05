import React from "react";
import privStyles from "../Assets/css/Privacy.module.css";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "./Navbar/Navbar";
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div>
            <Navbar />
            <div className={privStyles.main}>
            <Link to='/settings'><button><FaChevronLeft className={privStyles.leftarrow}/></button></Link>
                <h1>Privacy</h1>
            </div>
            <div className={privStyles.box}>
                <div className={privStyles.box1}>
                <h1>Trading Activity</h1>
                <p>Turn your account private to hide your trading activity and holdings. Note, private accounts cannot be copied, but any existing copiers will continue to copy your trades.</p>
                </div>
                <hr></hr>
            <div className={privStyles.box2}>
                <p>Public Account</p>
                <label className={privStyles.switch}>
                        <input type='checkbox'></input>
                        <span className={privStyles.slider}></span> 
                    </label>
            </div>
            </div>
        </div>
    )
}

export default Privacy;