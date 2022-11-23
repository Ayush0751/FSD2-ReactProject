import React from 'react'
import styles from "../../Assets/css/UserSubscription/SubscribedTradersList.module.css";
import SubscribedTraders from "./SubscribedTraders";

function SubscribedTradersList(props) {
  var trader1 = {
    traderName : "John Smith",
    username: "john69",
    tradingSince: "5th jan 2022",
    membership: "Gold",
    traderImg: "defaultDP.png"
  };
  // const activeTraderProfile=()=>{
  //   <SubscribedTraders traderImg={trader1.traderImg} traderName = {trader1.traderName} tradingSince = {trader1.tradingSince} membership={trader1.membership}/>
  // }
  return (
    <>

      {/* <div className={styles.tradersListBox}> */}
        <div className={styles.traderIcon}>
        {console.log((props.traderImg))}
        {/* <a href={props.traderProfile} onClick={props.funcn}><img src={require("../../Assets/images/Navbar/".concat(props.traderImg))} alt="trader img"  /></a> */}
        <img src={require("../../Assets/images/Navbar/".concat(props.traderImg))} alt="trader img" onClick={props.funcn} />
        {/* <img src={require("../../Assets/images/Navbar/".concat(props.traderImg))} alt="hihihi" /> */}
        {/* <img src={require(props.traderImg)} alt="hihihi" /> */}
        {/* <img src={require ("../../Assets/images/Navbar/defaultDP.png")} alt="" /> */}
        </div>
        
      {/* </div>*/}


    </>
  )
}

export default SubscribedTradersList