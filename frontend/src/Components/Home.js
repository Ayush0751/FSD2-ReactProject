import React from "react";
import Button from "./Button";
// import "../Assets/css/home.css";
import bgVid from "../Assets/images/Burning.gif";
import ReactRotatingText from "react-rotating-text";
import style from "../Assets/css/home.module.css";
import SocialTrading from "./SocialTrading";
import Subscription from "./Subscription";
import Testimonial from "./Testimonial";
import Test2 from "./Test2";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import "../Assets/css/mobile.module.css";


function Home() {
  return (
    <>
      <section id="home">
        <div className={style.homeMain}>

        
        <img className={style.video} src={bgVid} alt="" />

        <div className={style.home_text}>
          <h1 className={style.title}>
            The Social Network Of
            <span style={{ color: "white",opacity:'0.8 '}}>  Trader's</span>
          </h1>

          <h1 className={style.title2}>Where you can</h1>
          <h3 className={style.rotator}>
            <ReactRotatingText  className={style.namechange}
              pause="2000"
              typingInterval="20"
              deletingInterval="10"
              items={[
                "Share your ideas with others",
                "Copy trade of verified traders and earn.",
                "Learn trading from your favourite trader.",
              ]}
            />
          </h3>
          <Link to="/Login">
            <button className={style.joinBtn}>Join Us</button>
            {/* <Button text="Join Us" /> */}
          </Link>
          <a href="https://www.youtube.com/watch?v=O5L4HUMCWRk" target="blank">
            <h3 className={style.tutorial}>
              <span>Watch Tutorial</span>
            </h3>
          </a>
        </div>
        </div>
        <SocialTrading/>
        <Subscription/>
        {/* <Testimonial/> */}
        <Test2/>


      </section>
      <Footer/>
    </>
  );
}

export default Home;
