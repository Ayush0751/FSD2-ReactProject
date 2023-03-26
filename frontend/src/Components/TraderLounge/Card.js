// import React from "react";
import styles from "../../Assets/css/TraderLounge/TraderLounge.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import Button from "./Button"
// import styles1 from "../Assets/css/LoginPage.module.css"
import styles1 from "../../Assets/css/LoginPage.module.css";
import MoneyPopUp from "../MoneyPopUp";
// import MoneyPopUp from './MoneyPopUp'
function Card(props) {
  const { name, trader_id, address, rating, bio, copiers, age,profit } = props;
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
                      {name} |
                    </span>
                    <span className={styles["m-username--star"]}>{rating}★</span>
                    <p className={styles["front__text-para"]}>
                      <i className={"fas fa-map-marker-alt front-icons"}></i>
                      {address}
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
                          <span className={styles["userid"]}>{trader_id},</span>
                          <span className={styles["userage"]}>{age}</span>
                          <span className={styles["age"]}>(Age)</span>
                        </div>
                        <div className={styles["user-bio"]}>
                          {bio}
                        </div>
                        <hr className={styles["card-line"]} />
                        <div className={styles["user-avgprofit"]}>
                          <i className={"fa-solid fa-arrow-up"}></i>{" "}
                          <span className={styles["profit-percent"]}>
                            {profit}%
                          </span>
                          <span className={styles["profit-detail"]}>
                            (Profit in last Month)
                          </span>
                        </div>
                        <div className={styles["user-copiers"]}>
                          <span className={styles["num-copier"]}>{copiers}</span>{" "}
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
        isClicked && <MoneyPopUp close={onClose} name={name} />
        // <MoneyPopUp/>
      }
    </>
  );
}

export default Card;
