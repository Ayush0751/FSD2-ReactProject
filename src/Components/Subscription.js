import React from "react";
import style from "../Assets/css/Subscription.module.css";
import img1 from "../Assets/images/tips.jpg";

function Subscription() {

  function reveal() {
    // var reveals = document.querySelectorAll(style.reveal);
    var reveals = document.getElementsByClassName(style.reveal);
    // console.log(reveals)
  
    for (var i = 0; i < reveals.length; i++) {
      console.log("im in")
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add(style.active);
      } else {
        reveals[i].classList.remove(style.active);
      }
    }
  }
  // window.addEventListener(scroll)
  
  window.addEventListener("scroll", reveal());


  return (
    <>
      <section className={style.subscription} style={{backgroundColor:"black"}}>
        <h1>Subscriptions</h1>
        <div className={style.subsCont}>
          <div className={style.chatColumn}>
            <h3>Chat</h3>
            <div className={style.chatContent}>
                <div className={style.leftImg}>
                <img src={img1} alt="" />
              </div>
              <div className={`${style.chatText} ${style.reveal} ${style.fadeBottom}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium deereipsum dolor sit amet consectetur adipisicing elit.
                Accusantium deereipsum dolor sit amet consectetur adipisicing elit.
                Accusantium deerendis dolorem, perspiciatis quibusdam
                temporibus! Officiis, harum ipsam.
              </div>
              
              {/* <p>Get tips from your favourite trader by joining their group</p> */}
            </div>
            {/* <div className={style.circularBox}>
              <div className={style.circle1}>
                <p>
                  Lorem ipsum dolor sit amet consectedus laboriosam corrupti
                  obcaecati!
                </p>
              </div>
              <div className={style.circle1}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  eaque doloribus ad ratione quibusdam minus recusandae quia
                  mollitia, fugit quo.
                </p>
              </div>
            </div> */}
            {/* <p>
              Get one and one with your favourite trader with personalised chat
              system
            </p> */}
          </div>
          <div className={style.line}></div>
          <div className={style.tipsColumn}>
            <div className={style.bg}></div>
            <h3>Tips</h3>
            {/* <div className={style.circularBox}>
                        <div className={style.circle1}>
                            <p>Lorem ipsum dolor sit amet consectedus laboriosam corrupti obcaecati!</p>
                        </div>
                        <div className={style.circle1}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eaque doloribus ad ratione quibusdam minus recusandae quia mollitia, fugit quo.</p>
                        </div>
                    </div> */}
            <div className={style.tipsContent}>
              <div className={style.tipsText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium deereipsum dolor sit amet consectetur adipisicing elit.
                Accusantium deereipsum dolor sit amet consectetur adipisicing elit.
                Accusantium deerendis dolorem, perspiciatis quibusdam
                temporibus! Officiis, harum ipsam.
              </div>
              <div className={style.rightImg}>
                <img src={img1} alt="" />
              </div>
              {/* <p>Get tips from your favourite trader by joining their group</p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscription;