import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import styles1 from "../Assets/css/LoginPage.module.css";
import styles2 from "../Assets/css/PopUp.module.css";
import styles3 from "../Assets/css/InputField.module.css";
import InputField from "./InputField";
import Slider from "./Slider";
import { Link } from "react-router-dom";

function MoneyPopUp(props) {
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
      <div className={styles2.backGrd}>
        <div className={styles2.window}>
          <h1>Fund Your Account</h1>
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
          <h3>Credit/Debit Card</h3>   

          <div style={{display:"flex",flexDirection:"row"}}>
            <InputField id="amount" type="text" inputClass={styles3["form__field"]} lableClass= {styles3["form__label"]} placeHolder="Card Number" fun={updateVal}/>
            <div style={{width:"8rem",marginLeft:"2rem",marginRight:"2rem"}}>
              <input id="amount" type="text" className={styles3["form__field"]} placeHolder="MM/YY" fun={updateVal}/>
            </div>
            <div style={{width:"8rem"}}>
              <input id="amount" type="text" className={styles3["form__field"]} placeHolder="CVV" fun={updateVal}/>
            </div>
          </div>
          <br/><br/>
          <div style={{display:"flex",flexDirection:"row",padding:"20px"}}>
            <InputField id="amount" type="text" inputClass={styles3["form__field"]} lableClass= {styles3["form__label"]} placeHolder="FirstName" fun={updateVal}/>
            <div style={{marginLeft:"2rem",marginRight:"2rem"}}>
              <InputField id="amount" type="text" inputClass={styles3["form__field"]} lableClass= {styles3["form__label"]} placeHolder="MiddleName" fun={updateVal}/>
            </div>
            <div >
              <InputField id="amount" type="text" inputClass={styles3["form__field"]} lableClass= {styles3["form__label"]} placeHolder="LastName" fun={updateVal}/>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"row"}}>
            <Link to="/Portfolio"><button className={styles1["button"] + " "+styles2["extraBtn11"]} >Deposit</button></Link> 
            <button className={styles1["button"] + " "+styles2["extraBtn22"] } onClick = {props.close}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoneyPopUp;
