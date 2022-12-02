import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import styles1 from "../Assets/css/LoginPage.module.css";
import styles2 from "../Assets/css/PopUp.module.css";
import styles3 from "../Assets/css/InputField.module.css";
import InputField from "./InputField";
import Slider from "./Slider";

function MoneyPopUp(props) {
  const [amt, setAmt] = useState("0");
  const updateVal = (event) => {
    setAmt(event.target.value);
  };

  return (
    <>
      <div className={styles2.backGrd}>
        <div className={styles2.window}>
          <h1>COPY</h1>
          <h3>Amount willing to invest</h3>
          <InputField
            id="amount"
            type="text"
            inputClass={styles3["form__field"]}
            lableClass= {styles3["form__label"]}
            placeHolder="Amount"
            fun={updateVal}
          />
          <div className={styles2.sliderContainer}>     
            <div style={{margin:"2rem"}}>
              <h5 style={{ textDecoration: "underline" }}>STOP LOSS</h5>
              <Slider amount={parseInt(amt)} id1="id1" id2="id2"/>
            </div>
            <div className={styles2.line}></div>
            <div style={{margin:"2rem"}}>
              <h5 style={{ textDecoration: "underline" }}>STOP GAIN</h5>
              <Slider amount={parseInt(amt)} id1="idd1" id2="idd2"/>
            </div>
          </div>
          <div>
            <button className={styles1["button"] + " "+styles2["extraBtn"]}>Copy</button>
            <button className={styles1["button"] + " "+styles2["extraBtn2"] } onClick = {props.close}>Close</button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default MoneyPopUp;
