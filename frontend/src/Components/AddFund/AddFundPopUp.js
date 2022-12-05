import React, { useState, useEffect, useRef } from "react";
import styles1 from "../../Assets/css/LoginPage.module.css";
import styles2 from "../../Assets/css/PopUp.module.css";
import styles3 from "../../Assets/css/InputField.module.css";
import InputField from "../InputField";
import { Link } from "react-router-dom";
import ViaCreditCard from "./ViaCreditCard"
import ViaUPI from "./ViaUPI"
import ViaNetBank from "./ViaNetBank"

function MoneyPopUp(props) {

  return (
    <>
      <div className={styles2.backGrd}>
        <div className={styles2.window}>
          <h1>Fund Your Account</h1>
          {/* <ViaCreditCard close = {props.close}/> */}
          {/* <ViaUPI close = {props.close}/> */}
          <ViaNetBank close = {props.close}/>
        </div>
      </div>
    </>
  );
}

export default MoneyPopUp;
