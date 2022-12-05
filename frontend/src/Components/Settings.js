import React, { startTransition } from "react";
import settingStyles from "../Assets/css/Settings.module.css";

// import settingStyles from "./css/Settings.module.css";
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link,Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Settings = () => {
    // const navigate = useNavigate()
    return(
        <div>
            <Navbar/>
            <div className={settingStyles.setmain}>
                <div className={settingStyles.sethead}>
                    <h1>Settings</h1>
                    
                </div>
                <div className={settingStyles.setbody}>
                    <div className={settingStyles.settop}>
                        <div className={settingStyles.setgeneral}>
                            <h2>General</h2>
                            <FaWrench className={settingStyles.icon}/>
                            <p>Select your currency, languages and other preferences.</p>
                            <Link to='/general'><button ><FaChevronRight className={settingStyles.arrow}/></button></Link>
                        </div>
                        <div className={settingStyles.setaccount}>
                            <h2>Account</h2>
                            <FaUserCircle className={settingStyles.icon}/>
                            <p>Change your account credentials and secure it.</p>
                            <button><FaChevronRight className={settingStyles.arrow}/></button>
                        </div>
                        <div className={settingStyles.settrade}>
                            <h2>Trading</h2>
                            <FaRegChartBar className={settingStyles.icon}/>
                            <p>Modify your core trading experience.</p>
                            <Link to='/Trading'><button ><FaChevronRight className={settingStyles.arrow}/></button></Link>
                            {/* <button><FaChevronRight className={settingStyles.arrow}/></button> */}
                        </div>
                    </div>
                    <div className={settingStyles.setbottom}>
                        <div className={settingStyles.setnoti}>
                            <h2>Notifications</h2>
                            <FaBell className={settingStyles.icon}/>
                            <p>Opt-in or out from any communication you receive.</p>
                            <Link to='/notifications'><button ><FaChevronRight className={settingStyles.arrow}/></button></Link>
                            {/* <button><FaChevronRight className={settingStyles.arrow}/></button> */}
                        </div>
                        <div className={settingStyles.setprivacy}>
                            <h2>Privacy</h2>
                            <FaLock className={settingStyles.icon}/>
                            <p>Control how others see you and your activity.</p>
                            <Link to='/privacy'><button ><FaChevronRight className={settingStyles.arrow}/></button></Link>
                            {/* <button><FaChevronRight className={settingStyles.arrow}/></button> */}
                        </div>
                        <div className={settingStyles.setdeposit}>
                            <h2>Recurring Deposits</h2>
                            <FaCoins className={settingStyles.icon}/>
                            <p>Set up or manage your automatic deposits.</p>
                            <Link to='/recurringDeposit'><button ><FaChevronRight className={settingStyles.arrow}/></button></Link>
                            {/* <button><FaChevronRight className={settingStyles.arrow}/></button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Settings;