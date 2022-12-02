import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import SubscribedTradersList from "./SubscribedTradersList";
import SubscribedTraders from "./SubscribedTraders";
import Chat from "./Chat";
import styles from "../../Assets/css/UserSubscription/UserSubscription.module.css";

function UserSubscription() {
  var trader1 = {
    traderName : "John Smith",
    username: "john69",
    tradingSince: "5th jan 2022",
    membership: "Gold",
    traderImg: "defaultDP.png"
  };
  var trader2 = {
    traderName : "Ayush Singla",
    username: "Dingla420",
    tradingSince: "19th june 2022",
    membership: "Platinum",
    traderImg: "greydp.png"
  };

  const activeTraderProfile = (event)=>{
    console.log("hbk");
    // console.log(event.traderImg);
    setactiveTraderName(trader1.traderName);
    setactivetraderImg(trader1.traderImg);
    setactiveTradermembership(trader1.membership);
    setactiveTradertradingSince(trader1.tradingSince)
    if(trader1.membership=="Gold"){
      setbgImage("goldBg.jpg")
      setcol("#FFD700")
      setrgbCol("255,215,0")
    }

  }
  const activeTraderProfile2 = (event)=>{
    console.log("hbk");
    // console.log(event.traderImg);
    setactiveTraderName(trader2.traderName);
    setactivetraderImg(trader2.traderImg);
    setactiveTradermembership(trader2.membership);
    setactiveTradertradingSince(trader2.tradingSince);
    if(trader2.membership=="Platinum"){
      setbgImage("platinumBg.jpg")
      setcol("#E5E4E2")
      setrgbCol("	229, 228, 226")
    }
  }

  const [activeTraderName, setactiveTraderName] = useState(trader1.traderName)
  const [activetraderImg, setactivetraderImg] = useState(trader1.traderImg)
  const [activeTradermembership, setactiveTradermembership] = useState(trader1.membership)
  const [activeTradertradingSince, setactiveTradertradingSince] = useState(trader1.tradingSince)
  const [bgImage, setbgImage] = useState("goldBg.jpg");
  const [col, setcol] = useState("#FFD700");
  const [rgbCol, setrgbCol] = useState("255,215,0");
  return (
    <>
      <Navbar />
      <div className={styles.tradersListBox}>
        <SubscribedTradersList
          traderImg="defaultDP.png"
          traderProfile="https://www.youtube.com/"
          funcn = {activeTraderProfile}
        />
        <SubscribedTradersList
          traderImg="greydp.png"
          traderProfile="https://www.youtube.com/"
          funcn = {activeTraderProfile2}
        />
      </div>
      <hr className={styles.sepLine} />

      <div className={styles.openedTrader}>
        {/* <div className={styles.traderInfo} style={{backgroundImage:"url(../../images/".concat(bgImage).concat(")"), backgroundRepeat: 'no-repeat',backgroundSize: "100% 100%",boxShadow: "1px -2px 22px".concat(col)}}> */}
        <div className={styles.traderInfo} style={{backgroundImage: "linear-gradient(to right, rgba(".concat(rgbCol).concat(",0), rgba(").concat(rgbCol).concat(",0.5))")}}>
          <SubscribedTraders traderImg={activetraderImg} traderName = {activeTraderName} tradingSince = {activeTradertradingSince} membership={activeTradermembership}/>
        </div>

        <div className={styles.line}></div>

        <div className={styles.chatWindow}>
            <Chat traderName = {activeTraderName}/>

        </div>
      </div>
    </>
  );
}

export default UserSubscription;
