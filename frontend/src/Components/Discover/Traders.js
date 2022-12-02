import React from "react";
import styles from "../../Assets/css/Discover/Feed.module.css";

function Traders(props) {
  return (
    <div>
      <div className={styles["copiers"]}>
        <div className={styles["copiersPic"]}>
          <img
            src={require("../../Assets/images/Navbar/defaultDP.png")}
            alt=""
          />
        </div>
        <div className={styles["copiersName"]}>
          <p>{props.traderName}</p>
        </div>
        <div className={styles["copiersProfit"]}>
          <p>{props.traderProfit}</p>
        </div>
      </div>
    </div>
  );
}

export default Traders;
