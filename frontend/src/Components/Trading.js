import React,{ useState } from "react";
import tradStyles from "../Assets/css/Trading.module.css";
import Navbar from "./Navbar/Navbar";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Trading = () => {
    const[toggle,setToggle]=useState("One Click Trading allows you to open and close your trades faster, with only one click. By activating this feature, you will be able to pre-define the parameters you'd like to use on your trades,such as the trade size.");
    const isChange = () => {
        setToggle("Search for any market to set it up.");
        
    };
    

    return (
        <div>
            <Navbar />
            <div className={tradStyles.main}>
            <Link to='/settings'><button><FaChevronLeft className={tradStyles.leftarrow}/></button></Link>
            <h1>Trading</h1>
            </div>
            <div className={tradStyles.box}>
                <h1>One Click Trading</h1>
                <h2>Do you want to enable one click trading?</h2>
                <label className={tradStyles.switch}>
                    <input type='checkbox' onClick={isChange}></input>
                    <span className={tradStyles.slider}></span> 
                </label>
                <p>{toggle}</p>
            </div>
        </div>
    )
};

export default Trading;