import React, { useState, useEffect, useRef } from "react";
import styles1 from "../../Assets/css/LoginPage.module.css";
import styles2 from "../../Assets/css/PopUp.module.css";
import styles3 from "../../Assets/css/InputField.module.css";
import InputField from "../InputField";
import { Link } from "react-router-dom";
import ViaCreditCard from "./ViaCreditCard"
import ViaUPI from "./ViaUPI"
import ViaNetBank from "./ViaNetBank"
import styles4 from "../../Assets/css/AddFund.module.css";

function MoneyPopUp(props) {
  const [amt, setAmt] = useState("");
  const updateVal = (event) => {
    setAmt(event.target.value);
    // console.log(amt);
  };
  return (
    <div>
      
      <div className={styles2.backGrd}>
        <div className={styles2.window}>
          <h1>Fund Your Account</h1>
          <div className={styles4["box"]}>
            <form action="/action_page.php">
              <br/><br/>
            <label for="cars"><h3>Choose a payment method:<h3/></h3></label>
            <select className="payMethod" onClick={updateVal}>
              <option value="upi" >UPI</option>
              <option value="net" >Net Banking</option>
              <option value="credit" >Credfit Card</option>
            </select>
            </form>
          </div>
          {amt == "upi" &&
            <ViaUPI close = {props.close}/>
          }
          {amt == "net" &&
            <ViaNetBank close = {props.close}/>
          }
          {amt == "credit" &&
            <ViaCreditCard close = {props.close}/>
          }
          
          
          
        </div>
      </div>
    </div>
  );
}

export default MoneyPopUp;
