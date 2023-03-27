import React from "react";
import styles from "../../Assets/css/Navbar/Navbar.module.css";
// import {showMenu} from "./Sidenav"
import "@fortawesome/react-fontawesome";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useState,useEffect } from "react";

import {showMenu,Sidenav} from "./Sidenav";
import Feed from '../Discover/Feed';
import { Link } from "react-router-dom";
import axios from "axios";
// import img from "../../Assets/images/NavBar/defaultDP"

export default function Navbar(props) {
  const {email}=props
  const [userName,setUserName]=useState('')
  const getDetailByEmail =  async() => {
    let data;
    try {
        console.log("hii1");
        const order = await ( axios.get(`http://localhost:8081/api/users/userDetails/${email}`));
        console.log("hiiiiiiiiiiiiiiiiiiiiii");
        console.log(order.data.result, "user");
        data=order.data.result
      } catch (error) {
        // console.error("errorfsfsf");
        console.error(error);
      }
      setUserName (data.name);
    

  };

  // useEffect(() => {
  //   getDetailByEmail()
  // }, []);
  const handle = useFullScreenHandle();
  return (
    <FullScreen handle={handle}>
      <div className={styles.upnav}>
        <ul>
          <div className={`${styles.hamburg} ${styles.upnav_icon}`} onClick={showMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={`${styles.notif} ${styles.upnav_icon}`}>
            <i className="fa-regular fa-bell"></i>
            <div className={styles.notif_dropdown}>
              <p className={styles.notif_head}>Notifications</p>
              <div div className={styles.notif_column}>
                <p className={styles.notif_body}>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className={styles.notif_time}>13 min.</p>
              </div>
              <div div className={styles.notif_column}>
                <p className={styles.notif_body}>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className={styles.notif_time}>13 min.</p>
              </div>
              <div div className={styles.notif_column}>
                <p className={styles.notif_body}>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <p className={styles.notif_time}>13 min.</p>
              </div>
              <div className={`${styles.msg_column} ${styles.view_all}`}>
                <a href="/">View all</a>
              </div>
            </div>
          </div>
          <div className={`${styles.fav} ${styles.upnav_icon}`}>
            <i className="fa-regular fa-star"></i>
          </div>
          <div className={`${styles.msg} ${styles.upnav_icon}`}>
            <i className="fa-regular fa-message"></i>
            <div className={styles.msg_dropdown}>
              <p className={styles.msg_head}>Message Box</p>
              <div div className={styles.msg_column}>
                <div className={styles.msg_box}>
                  <img src={require("../../Assets/images/Navbar/defaultDP.png")} alt="" />
                  <div className={styles.msg_content}>
                    <div className={styles.msg_name}>
                      <b> Ayush Singla</b>
                    </div>
                    <p className={styles.msg_body}>Lorem ipsum dolor sit amet ...</p>
                    <p className={styles.msg_time}>58 mins ago</p>
                  </div>
                  <span className={styles.msg_nmbr}>2</span>
                </div>
              </div>
              <div div className={styles.msg_column}>
                <div className={styles.msg_box}>
                  <img src={require("../../Assets/images/Navbar/defaultDP.png")} alt="" />
                  <div className={styles.msg_content}>
                    <div className={styles.msg_name}>
                      <b> Ayush Singla</b>
                    </div>
                    <p className={styles.msg_body}>Lorem ipsum dolor sit amet ...</p>
                    <p className={styles.msg_time}>58 mins ago</p>
                  </div>
                  <span className={styles.msg_nmbr}>2</span>
                </div>
              </div>
              <div div className={styles.msg_column}>
                <div className={styles.msg_box}>
                  <img src={require("../../Assets/images/Navbar/defaultDP.png")} alt="" />
                  <div className={styles.msg_content}>
                    <div className={styles.msg_name}>
                      <b> Ayush Singla</b>
                    </div>
                    <p className={styles.msg_body}>Lorem ipsum dolor sit amet ...</p>
                    <p className={styles.msg_time}>58 mins ago</p>
                  </div>
                  <span className={styles.msg_nmbr}>2</span>
                </div>
              </div>
              <div className={`${styles.msg_column} ${styles.view_all}`}>
                <Link to="/Subscriptions">View all</Link>
              </div>
            </div>
          </div>

          <div className={`${styles.wide} ${styles.upnav_icon}`}>
            <i className="fa-solid fa-expand" onClick={handle.enter}></i>
          </div>

          <div className={styles.profile }>
            <img src={require("../../Assets/images/Navbar/defaultDP.png")} alt="" />
            <i className="fa-solid fa-caret-down drp-dwn"></i>
            <p>Sanu Das</p>
            <div className={styles.updropdown}>
              <div className={styles.updropdown_content}>
                <Link to="/Account">
                  <i className="fa-solid fa-user"></i> Account
                </Link>
                <Link to="/Settings">
                  <i className="fa-solid fa-gears"></i> Setting
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i> Log
                  out
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </div>

      <Sidenav />
    </FullScreen>
  );
}
