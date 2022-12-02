// import React from "react";
import styles from "../../Assets/css/TraderLounge/TraderLounge.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import Button from "./Button"
// import styles1 from "../Assets/css/LoginPage.module.css"
import styles1 from "../../Assets/css/LoginPage.module.css";
import MoneyPopUp from "../MoneyPopUp";
// import MoneyPopUp from './MoneyPopUp'
function Card() {
  const [isClicked, setisClicked] = useState(false);
  const onclck = () => {
    setisClicked(true);
    // const bodyBlur = document.getElementsByClassName(styles["product-card"]);
    // bodyBlur.style.filter = "blur(0px)";
  };
  const onClose = () => {
    setisClicked(false);
  };
  return (
    <>
      <div className={styles["product-card"]}>
        <div className={styles["outer-div"]}>
          <div className={styles["inner-div"]}>
            <div className={styles["front"]}>
              <div className={styles["front_ba"]}>
                <div className={styles["front_bb"]}>
                  <div className={styles["front__bkg-photo"]}></div>
                  <div className={styles["front__face-photo"]}></div>
                  <div className={styles["front__text"]}>
                    <span className={styles["front__text-header"]}>
                      Singla Das |
                    </span>
                    <span className={styles["m-username--star"]}>2★</span>
                    <p className={styles["front__text-para"]}>
                      <i className={"fas fa-map-marker-alt front-icons"}></i>
                      Patna
                    </p>
                    <p>------------------------------</p>
                  </div>
                  <div className={styles["back"]}>
                    <div className={styles["social-media-wrapper"]}>
                      <span className={styles["bookmark"]} id="bookmark-button">
                        <button onclick="bookmark()">
                          <i
                            className={styles["fa-solid fa-bookmark"]}
                            id="fa-watchlist"
                          ></i>
                        </button>
                      </span>
                      <div className={styles["back-details"]}>
                        <div className={styles["back-userid"]}>
                          <span className={styles["userid"]}>krsanu01,</span>
                          <span className={styles["userage"]}>17</span>
                          <span className={styles["age"]}>(Age)</span>
                        </div>
                        <div className={styles["user-bio"]}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ut corporis voluptate libero temporibus, minus
                          delectus
                        </div>
                        <hr className={styles["card-line"]} />
                        <div className={styles["user-avgprofit"]}>
                          <i className={"fa-solid fa-arrow-up"}></i>{" "}
                          <span className={styles["profit-percent"]}>
                            33.33%
                          </span>
                          <span className={styles["profit-detail"]}>
                            (Profit in last Month)
                          </span>
                        </div>
                        <div className={styles["user-copiers"]}>
                          <span className={styles["num-copier"]}>200</span>{" "}
                          <span className={styles["copier"]}>Copiers</span>{" "}
                          <span className={styles["copier-detail"]}>
                            (In last 10 days)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Link to="/CopyTrade"> */}
              <div>
                <button
                  className={styles["front__text-hover"]}
                  onClick={onclck}
                >
                  Copy
                </button>
                {/* {
                  isClicked && <MoneyPopUp close={onClose} />
                  // <MoneyPopUp/>
                } */}
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        isClicked && <MoneyPopUp close={onClose} />
        // <MoneyPopUp/>
      }
    </>
  );
}

export default Card;
