import React, { useState, useEffect, useRef } from "react";
import styles1 from "../../Assets/css/LoginPage.module.css";
import styles2 from "../../Assets/css/PopUp.module.css";
import styles3 from "../../Assets/css/InputField.module.css";
import InputField from "../InputField";
import style4 from "./NetBanking.module.css"
import { Link } from "react-router-dom";
import sbi from "../.././Assets/images/banks/SBI.jpeg"
import bob from "../.././Assets/images/banks/bob.png"
import icici from "../.././Assets/images/banks/icici.jpeg"

function ViaNetBank(props) {
    const [amt, setAmt] = useState("0");
    const updateVal = (event) => {
      setAmt(event.target.value);
    };
    const onSbmt = (e) => {
      console.log(amt);
      e.preventDefault();
    };
  return (
    <>
        <br /><br />
        <h3>Amount you want to deposite</h3>  
        <br />
        <div style={{display:"flex",flexDirection:"row"}}>
            <div>
              <i style={{marginTop:"1.8rem"}}class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
            </div>
            <InputField
              id="amount"
              type="text"
              inputClass={styles3["form__field"]}
              lableClass= {styles3["form__label"]}
              placeHolder="Rs"
              fun={updateVal}
            />
            
          </div> 
          <br /><br />
          {/* <div style={{display:"flex",flexDirection:"row"}}>
            <InputField id="amount" type="text" inputClass={styles3["form__field"]} lableClass= {styles3["form__label"]} placeHolder="UPI ID" fun={updateVal}/>
            
          </div>
          <br /><br /> */}
          <div className={style4.bankImg}>
            <div className={style4.imgBox}>
              <a href="https://retail.onlinesbi.sbi/retail/login.htm">
                <img src={sbi} alt="sbi logo" />
              </a>
              <a href="https://www.bankofbaroda.in/personal-banking/\digital-products/instant-banking/bob-world-internet-banking">
                <img src={bob} alt="bob logo" />
              </a>
              <a href="https://www.icicibank.com/personal-banking/insta-banking/internet-banking">
                <img src={icici} alt="icici logo" />
              </a>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"row"}}>
            <Link to="/Portfolio"><button className={styles1["button"] + " "+styles2["extraBtn11"]} >Verify & Deposit</button></Link> 
            <button className={styles1["button"] + " "+styles2["extraBtn22"] } onClick = {props.close}>Close</button>
          </div>
    </>
  )
}

export default ViaNetBank