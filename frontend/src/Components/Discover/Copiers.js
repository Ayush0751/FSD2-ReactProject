import React from "react";
import styles from "../../Assets/css/Discover/Feed.module.css";


function Copiers(props) {
  return (
    <>
      <div className={styles["copiers"]}>
        <div className={styles["copiersPic"]}>
          <img
            src={require("../../Assets/images/Navbar/defaultDP.png")}
            alt=""
          />
        </div>
        <div className={styles["copiersName"]}>
          <p>{props.copierName}</p>
        </div>
        <div className={styles["copiersProfit"]}>
          <p>{props.copierProfit}</p>
        </div>
      </div>
    </>
  );
}

export default Copiers;
