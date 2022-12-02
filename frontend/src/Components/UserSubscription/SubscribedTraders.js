import React,{useState,useEffect} from "react";
import styles from "../../Assets/css/UserSubscription/SubscribedTraders.module.css";
import MembershipDetails from "./MembershipDetails";

function SubscribedTraders(props) {
  const [membershipCol, setmembershipCol] = useState("gold")
  var membership = props.membership;
useEffect(() => {

  console.log(membership)
  // var membership = "Gold";
  if(membership=="Gold"){
    setmembershipCol("#FFD700")
  }
  else if(membership === "Platinum"){
    setmembershipCol("#E5E4E2")
  }
  else{
    setmembershipCol("#C0C0C0")
  }

}, [membership])

const showPlans = ()=>{
  setbtnStatus(true);  
  console.log("true")
}

const [btnStatus, setbtnStatus] = useState(false)
  // const [membershipCol, setmembershipCol] = useState("gold")
  // // var membership = props.membership;
  // var membership = "Gold";
  // if(membership==="Gold"){
  //   setmembershipCol("#FFD700")
  // }
  // else if(membership === "Platinum"){
  //   setmembershipCol("#E5E4E2")
  // }
  // else{
  //   setmembershipCol("#C0C0C0")
  // }
  return (
    <div>
      <div className={styles.SubscribedTraderInfo}>
        <div className={styles.traderPic}>
          <a href={props.traderProfile}>
            <img style={{border: "5px solid".concat(membershipCol)}}
              src={require("../../Assets/images/Navbar/".concat(
                props.traderImg))}alt="trader img"
            />
          </a>
        </div>
        <p className={styles.star}>🌟🌟🌟🌟</p>
        <p className={styles.traderName}>{props.traderName}</p>
        <p className={styles.tradingSince}><em> Subscribed Since: {props.tradingSince}</em></p>
        {/* <div className={`${styles.membership} {btnStatus?${styles.show}:${styles.hide}}`}> */}
        <div className={`${styles.membership} `}>
          <button onClick={showPlans} style={{backgroundColor:membershipCol}}>Upgrade Plan</button>
          <MembershipDetails clicked = {btnStatus}/>
          {/* <button ><p style={{backgroundColor:membershipCol}}>Upgrade Plan</p></button> */}
          {/* <p style={{backgroundColor:membershipCol}}>Upgrade Plan</p> */}
        </div>
      </div>
    </div>
  );
}

export default SubscribedTraders;
