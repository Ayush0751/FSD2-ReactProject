import React, { useRef } from "react";
import { useEffect } from "react";
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
// import "../Assets/css/LearnTrading.css";
import style1 from "../Assets/css/SocialTrading.module.css";
import SocialImg from "../Assets/images/Social.jpg";
// import {render} from '@testing-library/react'
// import LightSpeed from 'react-reveal/LightSpeed';

// test('renders react')
function SocialTrading(props) {
  // useEffect(() => {
  //   const reveals = document.getElementsByClassName(style1.reveal);
  //   console.log(reveals);
  //   console.log(reveals[0]);
  //   reveals[0].classList.add(style1.active);
  //   reveals[1].classList.add(style1.active);
  //   reveals[2].classList.add(style1.active);
  // }, []);
  // console.log(reveals);

  // const x = useRef();
  function reveal() {
    // useEffect(() => {
      const reveals = document.getElementsByClassName(style1.reveal);
      // console.log(reveals);
      // console.log(reveals[0]);
      // reveals[0].classList.add(style1.active);
      // reveals[1].classList.add(style1.active);
      // reveals[2].classList.add(style1.active);
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        // var elementTop = tem.getBoundingClientRect().top;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        // console.log(tem)
        // typeof(tem)

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          // console.log(x.current);
          reveals[i].classList.add(style1.active);
          // tem.className = "active";
        } else {
          reveals[i].classList.remove("active");
        }
      }
    // }, []);
    // const reveals = document.getElementsByClassName(style1.reveal);
    // console.log(reveals[0]);
    // reveals[0].sty
    // console.log(x.current);
    // console.log(document.getElementsByClassName(".social_trading"));
    // var tem = x.current;
    // for (var i = 0; i < reveals.length; i++) {
    // var windowHeight = window.innerHeight;
    // var elementTop = tem.getBoundingClientRect().top;
    // var elementTop = reveals[i].getBoundingClientRect().top;
    // var elementVisible = 150;
    // console.log(tem)
    // typeof(tem)

    // if (elementTop < windowHeight - elementVisible) {
    // reveals[i].classList.add("active");
    // console.log(x.current)
    // tem.className = "active";
    // } else {
    // reveals[i].classList.remove("active");
    // }
    // }
  }
  // reveal();
  // setTimeout(() => {
    // var reveals = document.getElementById("id1");
    // console.log(reveals);
    window.addEventListener("scroll", reveal);
  // }, 1000);

  return (
    <>
      <div className={style1.social_trading} id={style1.id1}>
        <h1 className={style1.socialHeading}>Social Trading</h1>
        {/* <div className={`{${style1.social_tradingp1} ${style1.fade_bottom} ${style1.reveal}}`}> */}
        <div
          // ref={x}
          className={
            style1["social_tradingp1"] +
            " " +
            style1["fade_bottom"] +
            " " +
            style1["reveal"]
          }
        >
          <div className={style1.social_trading_text}>
            <h3>What is Social Trading?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              cumque ea! Amet necessitatibus iste quae dicta veniam, ab, facere
              sint odit quidem cupiditate, provident at obcaecati ad ex.
              Necessitatibus quisquam veniam alias ex facere ipsa? Non nobis
              saepe quod. Ullam totam omnis est tempore.
            </p>
          </div>
        </div>

        <div className={style1.social_trading_outer_part}>
          <div
            className={`${style1.social_trading_inner_part} ${style1.fade_left} ${style1.reveal}`}
          >
            {/* <div> */}
            {/* <img src="../images/Social.jpg" alt="social"/> */}
            <img src={SocialImg} alt="social" />
            {/* </div> */}
            <div className={style1.left_content}>
              <h2>Opportunity to learn</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                voluptatibus, perspiciatis minima nobis quasi sunt eius
                explicabo dolore reprehenderit non quae illo quod aliquid fugiat
                dolores laboriosam distinctio a? Corrupti quisquam possimus
                iusto namtas sequi!
              </p>
            </div>
          </div>
          <div
            className={`${style1.social_trading_inner_part} ${style1.fade_right} ${style1.reveal}`}
          >
            <div className={style1.right_content}>
              <h2>Oppurtunity to learn</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                voluptatibus, perspiciatis minima nobis quasi sunt eius
                explicabo dolore reprehenderit non quae illo quod aliquid fugiat
                dolores laboriosam distinctio a? Corrupti quisquam possimus
                iusto namtas sequi!
              </p>
            </div>

            {/* <div> */}
            {/* <img src="../images/Social.jpg" alt="social"/> */}
            <img src={SocialImg} alt="social" />
            {/* </div> */}
          </div>

          <div
            className={`${style1.social_trading_inner_part} ${style1.fade_left} ${style1.reveal}`}
          >
            {/* <div> */}
            {/* <img src="../images/Social.jpg" alt="social"/> */}
            <img src={SocialImg} alt="social" />
            {/* </div> */}
            <div className={style1.left_content}>
              <h2>Oppurtunity to learn</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                voluptatibus, perspiciatis minima nobis quasi sunt eius
                explicabo dolore reprehenderit non quae illo quod aliquid fugiat
                dolores laboriosam distinctio a? Corrupti quisquam possimus
                iusto namtas sequi!
              </p>
            </div>
          </div>

          <div
            className={`${style1.social_trading_inner_part} ${style1.fade_right} ${style1.reveal}`}
          >
            <div className={style1.right_content}>
              <h2>Oppurtunity to learn</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                voluptatibus, perspiciatis minima nobis quasi sunt eius
                explicabo dolore reprehenderit non quae illo quod aliquid fugiat
                dolores laboriosam distinctio a? Corrupti quisquam possimus
                iusto namtas sequi!
              </p>
            </div>

            {/* <div> */}
            {/* <img src="../images/Social.jpg" alt="social"/> */}
            <img src={SocialImg} alt="social" />
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <h1>React Animate On Scroll</h1>
        <h2>Using:</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h2>
          <a href="https://daneden.github.io/animate.css/" style1={{color:"black"}}>Animate.css</a>
        </h2>
      </ScrollAnimation> */}
    </>
  );
}

export default SocialTrading;
