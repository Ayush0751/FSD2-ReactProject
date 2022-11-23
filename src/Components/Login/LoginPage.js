import React, { useState } from "react";
import styles from "../../Assets/css/LoginPage.module.css"
import User from "./UserType";
import Form from "./Form";
import PhoneVerification from "./PhoneVerification" 
import IdVerify from "./IdVerify"

function Login() {
  const [isRegis, setisRegis] = useState(0);
  const [userIsRegistered, setuserIsRegistered] = useState(true);
  const incr1 =()=> {
    setisRegis(1);
  }
  const incr2 =()=> {
    setisRegis(5);
  }
  const incr3 =()=> {
    setisRegis(2);
  }
  const userReg =()=> {
    setuserIsRegistered(false);
  }
  const isVerified =()=> {
    setisRegis(3);
  }
  const backButton =()=> {
    if(userIsRegistered == false && isRegis == 1){
      setuserIsRegistered(true);
      return;
    }
    setisRegis(isRegis-1);
    
  }
  return (
    <div>
      <div className={styles['bg-img']}></div>
      <div className={styles.parent}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContainerUp}>
            <i className={"fa-solid fa-2x fa-money-bill-trend-up" +" "+ styles["fa_solid"]}></i>
            <i className={"fa-solid fa-2x fa-hand-holding-dollar" +" "+ styles["fa_solid"]}></i>
            <i className={"fa-solid fa-2x fa-coins" +" "+ styles["fa_solid"]}></i>
          </div>
          ______________________________________________________
          <div className={styles.leftContainerDown}>
            <ul>
              <li>dont know how to invest?</li>
              <li>Need help with trading?</li>
              <li>Get professional advise !</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightContainer}>
          {(isRegis!=0)&&
            <button className = {styles.backArrow} onClick = {backButton}>
              <i class={"fa-solid fa-arrow-left-long fa-2x"}></i>
            </button>
          }
          {(isRegis==0)&&
            <User setCnt1 = {incr1} setCnt2 = {incr2}  />
          }
          {(isRegis==1)&&
            <Form isRegistered = {userIsRegistered} setCnt3 ={incr3} notRegistered = {userReg}/>
          }
          {(isRegis==5)&&
            <Form isRegistered = {userIsRegistered} setCnt3 ={incr3} notRegistered = {userReg}/>
          }
          {(isRegis==2)&&
            <PhoneVerification isVerified ={isVerified} />
          }
          {(isRegis==3)&&
            <IdVerify />
          }
        </div>


      </div>
    </div>

  );
}

export default Login;
