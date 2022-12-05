import React from "react";
import rdStyles from "../Assets/css/Recurringdep.module.css";
import { FaChevronLeft,FaMoneyCheckAlt } from "react-icons/fa";
import Navbar from "./Navbar/Navbar";
import { Link } from 'react-router-dom';

const RecurringDeposit = () => {
    return(
        <div>
            <Navbar />
            <div className={rdStyles.main}>
            <Link to='/settings'><button><FaChevronLeft className={rdStyles.leftarrow}/></button></Link>
                <h1>Reccuring Deposits</h1>
            </div>
            <div className={rdStyles.box}>
                <FaMoneyCheckAlt className={rdStyles.money}/>
                <h1>Recurring Deposits</h1>
                <p>To get started, you'll need to make one manual deposit with your credit or debit card. Then you can easily set up recurring deposits.</p>
                <Link to='/DepositFunds'><button >Deposit</button></Link>
                {/* <button >Deposit</button> */}
                
            </div>
        </div>
    )
}

export default RecurringDeposit;