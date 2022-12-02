import React, { useState } from "react";
import Button from "./Button"
import styles1 from "../Assets/css/LoginPage.module.css"
import MoneyPopUp from './MoneyPopUp'

function MoneyInvest() {
  const [isClicked, setisClicked] = useState(false);
  const onclck =()=> {
    setisClicked(true);
  }
  const onClose =()=> {
    setisClicked(false);
  }
  return (
    <div>
      <Button classname ={styles1.button} text = " Invest " onClick={onclck}/>
      {
        isClicked &&
        <MoneyPopUp close = {onClose}/>
      }
    </div>
  )
}

export default MoneyInvest