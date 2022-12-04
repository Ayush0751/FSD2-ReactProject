import React, { useState } from "react";
import Button from "../Button"
import styles1 from "../../Assets/css/LoginPage.module.css"
import AddFundPopUp from './AddFundPopUp'

function AddFund() {
  const [isClicked, setisClicked] = useState(false);
  const onclck =()=> {
    setisClicked(true);
  }
  const onClose =()=> {
    setisClicked(false);
  }
  return (
    <div>
      <Button classname ={styles1.button} text = " Add Fund " onClick={onclck}/>
      {
        isClicked &&
        <AddFundPopUp close = {onClose}/>
      }
    </div>
  )
}

export default AddFund