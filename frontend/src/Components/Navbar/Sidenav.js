import React from "react";
// import "./css/Sidenav.module.css";
import styles1 from "../../Assets/css/Navbar/Sidenav.module.css";
import { Link } from "react-router-dom";
import "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Feed from '../Discover/Feed';
// import styles2 from "../Assets/css/LoginPage.module.css"
import AddFundPopUp from '../AddFund/AddFundPopUp'
import FooterDash from "../FooterDash.js"
import { useState } from "react";

<link
  rel="styles1sheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>;
function showMenu (){
  // console.log("Classs = " + `${styles1.back_menu}`);
  var menu=document.getElementById(styles1.back_menu);
  console.log(menu);
  menu.style.visibility="visible";  

};
function closeMenu (){
  var menu=document.getElementById(styles1.back_menu);
  menu.style.visibility="hidden";

};
function Sidenav() {
  const [isClicked, setisClicked] = useState(false);
  const onclck =()=> {
    setisClicked(true);
  }
  const onClose =()=> {
    setisClicked(false);
  }
  
  return (
    <>
    <div className={styles1.joint_box}>
      <div className={styles1.container}>
        <div className={`${styles1.hamburg2} ${styles1.joint}`}>
          <i className="fa-regular fa-z" ></i>
        </div>
        
        <div className={styles1.sidenav_front}>
          <div className={`${styles1.profile_pic} ${styles1.navicon} ${styles1.joint}`}>
            <img src={require("../../Assets/images/Navbar/greydp.png")} alt="" />
          </div>
          <div className={`${styles1.home} ${styles1.navicon} ${styles1.joint}`}>
            <i className="fa-solid fa-house-chimney"></i>
            {/* <FontAwesomeIcon icon="fa-solid fa-house-chimney" /> */}
          </div>
          <div className={`${styles1.discover} ${styles1.navicon} ${styles1.joint}`}>
            <i className="fa-solid fa-compass"></i>
          </div>
          <div className={`${styles1.trade} ${styles1.navicon} ${styles1.joint}`}>
            <i className="fa-solid fa-money-bill-trend-up"></i>
          </div>
          <div className={`${styles1.subscription} ${styles1.navicon} ${styles1.joint}`}>
            <i className="fa-solid fa-bullhorn"></i>
          </div>
          <div className={`${styles1.portfolio} ${styles1.navicon} ${styles1.joint}`}>
            <i className="fa-solid fa-chart-pie"></i>
          </div>
        </div>
      </div>

      <div className={`${styles1.back_container} ${styles1.temp}`} id={`${styles1.back_menu}`}>
        <div className={styles1.logo}>
          <p>Zrading</p>
        </div>
        <span className={styles1.close} onClick={closeMenu}>
        <i className="fa-solid fa-xmark"></i>
        </span>
        <div className={styles1.back_container_min} id={styles1.min_container}>
         
          <div className={styles1.contents}>
            <div className={styles1.profile_bar}>
              <img src={require("../../Assets/images/Navbar/greydp.png")} alt="" />
              <p>Ayush Singla</p>
            </div>
            <div className={styles1.profile_prog}>
              <div className={styles1.com}>
                <span>40%</span>
                <span>&nbsp;Complete</span>
              </div>
              <progress id={styles1.file} value="32" max="100">
                50%
              </progress>
              <a className={styles1.a_pro} href="/">
                Complete Profile
              </a>
            </div>

            <Link to="/DashBoard">Dashboard</Link>
            <Link to="/Discover">Discover</Link>
            <Link to="/TraderLounge">Trader's Lounge</Link>
            <Link to="/Subscriptions">Subscriptions</Link>
            <Link to="/Portfolio">Portfolio</Link>
          </div>
          <div className={styles1.contents_2}>
            <p>More</p>
            <Link to="/withdraw">
              <i className="fa-solid fa-database"></i> Withraw Funds
            </Link>
            <Link to="/invite">
              <i className="fa-solid fa-bullhorn"></i> Invite Friends
            </Link>
            <a href="/">
              <i className="fa-solid fa-circle-question"></i> Help
            </a>
          </div>
        </div>
        <div className={styles1.contents_3}>
        {/* <Link to="/DepositFunds"> */}
          <button onClick={onclck}>Deposit Funds</button>
        {/* </Link> */}
        </div>
      </div>
    </div>
    {
        isClicked &&
        <AddFundPopUp close = {onClose}/>
        
      }
      {/* <div className={styles1.footerzz}>

      </div> */}
    </>
    
  );
}
export {showMenu,Sidenav};