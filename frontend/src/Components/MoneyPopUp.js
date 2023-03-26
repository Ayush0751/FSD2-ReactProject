import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import styles1 from "../Assets/css/LoginPage.module.css";
import styles2 from "../Assets/css/PopUp.module.css";
import styles3 from "../Assets/css/InputField.module.css";
import InputField from "./InputField";
import Slider from "./Slider";
import CopyOrder from "./Functions/CopyOrder";
// import async from "hbs/lib/async";
import axios from "axios";

function MoneyPopUp(props) {
  const{name}=props
  console.log(name,"hiiiiiiiiiiiiiiiii");
  const [amt, setAmt] = useState("0");
  const updateVal = (event) => {
    setAmt(event.target.value);
  };
const [flag,setFlag] = useState(false);


  const slRef = useRef();
  const sgRef = useRef();
  let [loadingState, setLoadingState] = useState(false);
  const handleCopy =  async(e) => {
    setLoadingState(true);
    // e.preventDefault();
    const order = await axios.post(
      "http://localhost:8081/api/copy/copy-order",
      {
        amount: amt,
        stoploss: slRef.current.value,
        stopgain: sgRef.current.value,
        name:name
      }
    );
    console.log({
      amt,
      stopLoss: slRef.current.value,
      stopGain: sgRef.current.value,
      name:name
    })
    if (order.length === 0) {
      console.log("Order Failed!");
    } else {
      console.log("Order Placed Successfully!");
      alert("Order Placed Successfully!");
      props.close()
      //   setLoadingState(false);
      //   navigateTo();
    }

  };
  useEffect((e) => {
    // temp(e, "cipla");
  
    setLoadingState(false);
  }, []);
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
              <Slider amount={parseInt(amt)} id1="id1" id2="id2" key1={"loss"}  myRef = {slRef}/>
            </div>
            <div className={styles2.line}></div>
            <div style={{margin:"2rem"}}>
              <h5 style={{ textDecoration: "underline" }}>STOP GAIN</h5>
              <Slider amount={parseInt(amt)} id1="idd1" id2="idd2" key1={"gain"}  myRef = {sgRef}/>
            </div>
          </div>
          <div>
            <button className={styles1["button"] + " "+styles2["extraBtn"]} onClick={() => {
              setFlag(true)
              handleCopy();
            }} >Copy</button>
            <button className={styles1["button"] + " "+styles2["extraBtn2"] } onClick = {props.close}>Close</button>
          </div>
          
        </div>
      </div>
      {flag && <CopyOrder amount={amt} flag={flag} />}
     
    </>
  );
}

export default MoneyPopUp;
