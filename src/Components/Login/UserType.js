import React, { useState } from "react";
import styles from "../../Assets/css/LoginPage.module.css"
import Button from "../Button"

function User(props) {
  const [count, setCount] = useState(0);
  const incr =()=> {
    var x = props.setCnt1()
  }
  const incr2 =()=> {
    var x = props.setCnt2()
  }
return (
    <>
      <div className={styles.user_img}>
        <img src = {require('../../Assets/images/149071.png')} alt="missing img"></img>
      </div>
      <div >
        <Button classname ={styles.button} text = " sign-in as trader" onClick = {incr}/>

      </div>
      <div>
        <Button classname ={styles.button} text = " sign-in as client" onClick = {incr2}/>
      </div>
    </>
  );
}

export default User;
