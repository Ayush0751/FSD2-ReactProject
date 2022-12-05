
import React, { useState } from "react";
import accountStyles from "../Assets/css/Account.module.css";
import { FaChevronLeft } from "react-icons/fa";
import Updatemodel from '../Components/ringu/Updatemodel'
import Navbar from "./Navbar/Navbar";

const Account = () => {
    const [modalOpened,setModalOpened]=useState(false);
    return (
       <>
        <Navbar/>
        <div className={accountStyles.accmain}>
            <div className={accountStyles.acchead}>
                <button><FaChevronLeft className={accountStyles.leftarrow} /></button>
                <h1>Account</h1>
            </div>
            <div className={accountStyles.accbody}>
                <div className={accountStyles.accdet}>
                    <h2>Credentials</h2>
                    <h3>USERNAME</h3>
                    <p>Ringu Ram Charan</p>
                    <div className={accountStyles.email}>
                        <h3>EMAIL</h3>
                        <p>ramcharan.20@iiits.in</p>
                        {/* <button>Change</button> */}
                    </div>
                    <div className={accountStyles.password}>
                        <h3>PASSWORD</h3>
                        <p>****</p>
                        {/* <button>Change</button> */}
                    </div>
                    <div className={accountStyles.phone}>
                        <h3>PHONE</h3>
                        <p>7013980769</p>
                        {/* <button>ADD</button> */}
                    </div>
                    <div className={accountStyles.bank}>
                        {/* <button>Add Bank Account</button> */}
                    </div>
                    <button type="submit" onClick={()=>setModalOpened(true)}>Update</button>
                    <Updatemodel modalOpened={modalOpened} setModalOpened={setModalOpened}></Updatemodel>
                </div>
                <div className={accountStyles.accsecurity}>
                    <h2>Security</h2>
                    <p>Secure your account with additional layers of protection.</p>
                    <h3>Two Factor Authentication</h3>
                    <p>Keep your account secure by requiring a second method of authentication.</p>
                    
                        </div>
                </div>
            </div>
            
            </>
    )
}

            export default Account;