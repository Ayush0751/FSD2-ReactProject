import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Assets/css/TraderLounge/TraderLounge.module.css";
import Navbar from "../Navbar/Navbar";
import Card from "./Card";
import handleTraders from "./GetTraders";
import { useState,useEffect } from "react";

function TraderLounge() {
  const productContainers = [
    ...document.querySelectorAll(".product-container"),
  ];
  const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
  const preBtn = [...document.querySelectorAll(".pre-btn")];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });
  // Wishlist
  //   let btnwatchlist = document.getElementsByClassName("bookmark");
  //   let watchlist = document.querySelector(".fa-bookmark");

  //   const colors = ["white", "#0095EB"];
  //   let index = 0;
  //   console.log(btnwatchlist);
  //   btnwatchlist.addEventListener(
  //     "click",
  //     () =>
  //       (watchlist.style.color =
  //         colors[(index = index >= colors.length - 1 ? 0 : index + 1)])
  //   );
  //   btnwatchlist.addEventListener("click", function confirmation() {
  //     if (index % 2 == 1) {
  //       alert("Added to watchlist");
  //     } else {
  //       alert("removed from watchlist");
  //     }
  // $('#hideDiv').show();

  // setTimeout(function() { $("#hideDiv").hide(1500); }, 2000)
  //   });
  // $('#hideDiv').show();

  // $(function confirmation() {
  // setTimeout(function() { $("#hideDiv").hide(1500); }, 2000)

  // })
  const [traderData, setTraderData] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    async function fun() {
      const pp = await handleTraders();
      setTraderData(pp);
    }
    fun();
    setFlag(false);
  }, [flag]);
  return (
    <>
      <Navbar />
      <div className={styles["lounge"]}>
        <section className={styles["product"]}>
          <h2 className={styles["product-category"]}>Recommended Traders</h2>
          <button className={styles["pre-btn"]}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>
          <button className={styles["nxt-btn"]}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>

          <div className={styles["product-container"]}>
          {traderData?.length > 0 &&
              traderData.map((item, i) => (
                <Card
                  name={item.name}
                  trader_id={item.trader_id}
                  address={item.address}
                  rating={item.rating}
                  bio={item.bio}
                  copiers={item.copiers}
                  profit={item.profits}
                />
              ))}
          </div>
        </section>
        <div className={styles["pro-line"]}>
          <p>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        </div>
        <section className={styles["product"]}>
          <div className={styles["product-category2"]}>
            <span className={styles["pro-category"]}>Top rating</span>
            <span className={styles["view-all"]}>
              <Link to="/ViewAll">VIEW ALL</Link>
              <i
                className={"fa-solid fa-angle-right"}
                style={{ color: "#0095eb" }}
              ></i>
            </span>
          </div>
          <button className={styles["pre-btn"]}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>
          <button className={styles["nxt-btn"]}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>
          <div className={styles["product-container"]}>
          {traderData?.length > 0 &&
              traderData.map((item, i) => (
                <Card
                  name={item.name}
                  trader_id={item.trader_id}
                  address={item.address}
                  rating={item.rating}
                  bio={item.bio}
                  age={item.age}
                  copiers={item.copiers}
                  profit={item.profits}
                />
              ))}
          </div>
        </section>
        <div className={styles["pro-line"]}>
          <p>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        </div>
        <section className={styles["product"]}>
          <div className={styles["product-category2"]}>
            <span className={styles["pro-category"]}>Most Copied</span>
            <span className={styles["view-all"]}>
              <Link to="/ViewAll">VIEW ALL</Link>
              <i
                className={"fa-solid fa-angle-right"}
                style={{ color: "#0095eb" }}
              ></i>
            </span>
          </div>
          <button className={styles["pre-btn"]}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>
          <button className={styles["nxt-btn"]}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>
          <div className={styles["product-container"]}>
            {traderData?.length > 0 &&
              traderData.map((item, i) => (
                <Card
                  name={item.name}
                  trader_id={item.trader_id}
                  address={item.address}
                  rating={item.rating}
                  bio={item.bio}
                  copiers={item.copiers}
                  profit={item.profits}
                />
              ))}
          </div>
        </section>
        <div className={styles["pro-line"]}>
          <p>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        </div>
        <section className={styles["product"]}>
          <div className={styles["product-category2"]}>
            <span className={styles["pro-category"]}>Top profit makers</span>
            <span className={styles["view-all"]}>
              <Link to="/ViewAll">VIEW ALL</Link>
              <i
                className={"fa-solid fa-angle-right"}
                style={{ color: "#0095eb" }}
              ></i>
            </span>
          </div>
          <button className={styles["pre-btn"]}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>
          <button className={styles["nxt-btn"]}>
            <i className={"fa-solid fa-angle-right"}></i>
          </button>
          <div className={styles["product-container"]}>
          {traderData?.length > 0 &&
              traderData.map((item, i) => (
                <Card
                  name={item.name}
                  trader_id={item.trader_id}
                  address={item.address}
                  rating={item.rating}
                  bio={item.bio}
                  copiers={item.copiers}
                  profit={item.profit}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default TraderLounge;
