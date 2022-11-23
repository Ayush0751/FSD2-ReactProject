import React from "react";
import styles from "../../Assets/css/Portfolio/Portfolio.module.css";
import { useState } from "react";
import { UserData } from "../Data";
import { Chart as ChartJS } from "chart.js/auto";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import LineChart from "../LineChart";
import Navbar from "../Navbar/Navbar";
function Portfolio() {
  const [userData, setUserData] = useState({
    lavel: "Trade date:",
    labels: UserData.map((temp) => temp.TradeDate),
    // labels: ['red','blue'],
    datasets: [
      {
        label: "Return in %",
        data: UserData.map((data) => data.gain),
        borderColor: "red",
        // data: [22,14],
      },
    ],
    options: [
      {
        responsive: true,
        scales: {
          y: {
            ticks: { color: "green", beginAtZero: true },
          },
          x: {
            ticks: { color: "red", beginAtZero: true },
          },
        },
      },
    ],
    width: "30%",
  });

  function ShowChart() {
    const graphDiv = document.getElementById(styles.portGraph);
    const bodyBlur = document.getElementById("forBlur");

    graphDiv.style.display = "Block";
    bodyBlur.style.filter = "blur(5px)";

    console.log(bodyBlur);
    // element.toggle("slow", function ShowChart() {});
    // $(styles.portGraph).toggle("slow", function () {});
  }
  function CloseChart() {
    const graphDiv = document.getElementById(styles.portGraph);
    const bodyBlur = document.getElementById("forBlur");

    bodyBlur.style.filter = "blur(0px)";
    graphDiv.style.display = "none";

    console.log(bodyBlur);
    // element.toggle("slow", function ShowChart() {});
    // $(styles.portGraph).toggle("slow", function () {});
  }
  return (
    <>
    <Navbar/>
      <div id="forBlur">
        <section>
          <div className={styles.row}>
            <div className={`${styles.invest_box} ${styles.box}`}>
              <div className={`${styles.wallet_widget} ${styles.card}`}>
                <h5>INVESTED AMOUNT</h5>
                <h2>
                  <span className={`${styles.box_amount} ${styles.clr1}`}>
                    3100.00
                  </span>
                  <sub className={styles.clr1}>INR</sub>
                </h2>
                <p>= 65 %</p>
              </div>
            </div>
            <div className={`${styles.remaining_box} ${styles.box}`}>
              <div className={`${styles.wallet_widget} ${styles.card}`}>
                <h5>REMAINING</h5>
                <h2>
                  <span className={`${styles.box_amount} ${styles.clr2}`}>
                    550.00
                  </span>
                  <sub className={styles.clr2}>INR</sub>
                </h2>
                <p>= 35 %</p>
              </div>
            </div>
            <div className={`${styles.total_box} ${styles.box}`}>
              <div className={`${styles.wallet_widget} ${styles.card}`}>
                <h5>TOTAL</h5>
                <h2>
                  <span className={`${styles.box_amount} ${styles.clr3}`}>
                    3650.00
                  </span>
                  <sub className={styles.clr3}>INR</sub>
                </h2>
                <p>= 100 %</p>
              </div>
            </div>
            <div className={`${styles.pl_box} ${styles.box}`}>
              <div className={`${styles.wallet_widget} ${styles.card}`}>
                <h5>DAILY P/L</h5>
                <h2>
                  <span className={`${styles.box_amount} ${styles.clr4}`}>
                    3100.00
                  </span>
                  <sub className={styles.clr4}>INR</sub>
                </h2>
                {/* <Popup trigger={<button> Click for details </button>} position="left center" width>
             
                <LineChart chartData={userData} />
              </Popup> */}
                <p id={styles.Pl_btn} onClick={ShowChart}>
                  Click for details
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.tradeTable}>
            <div className={styles.open_pos}>
              <div className={styles.sec_cat}>
                <p>OPEN POSITIONS</p>
              </div>
              <table>
                <tr>
                  <th>Trader</th>
                  <th>Amount Invested</th>
                  <th>Current ROI</th>
                  <th>Start Time</th>
                  <th>Check</th>
                </tr>
                <tr>
                  <td>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                    <span>Ayush Singla</span>
                  </td>
                  <td>1600</td>
                  <td>5%</td>
                  <td>8:00AM 8 Feb</td>
                  <td>
                    <a href="/">Close</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                    <span>Ayush Singla</span>
                  </td>
                  <td>1600</td>
                  <td>5%</td>
                  <td>8:00AM 8 Feb</td>
                  <td>
                    <a href="/">Close</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                    <span>Ayush Singla</span>
                  </td>
                  <td>1600</td>
                  <td>5%</td>
                  <td>8:00AM 8 Feb</td>
                  <td>
                    <a href="/">Close</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={require("../../Assets/img/greydp.png")} alt="" />
                    <span>Ayush Singla</span>
                  </td>
                  <td>1600</td>
                  <td>5%</td>
                  <td>8:00AM 8 Feb</td>
                  <td>
                    <a href="/">Close</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.tradeTable}>
            <div className={styles.open_pos}>
              <div className={styles.sec_cat}>
                <p>HISTORY</p>
              </div>
              <table>
                <tr>
                  <th>Trader</th>
                  <th>Amount Invested</th>
                  <th>Amount Recieved</th>
                  <th>Return</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
                <tr>
                  <td>
                    <div className={styles.histImg}>
                      <img src={require("../../Assets/img/greydp.png")} alt="" />
                      <span>Ayush Singla</span>
                    </div>
                  </td>
                  <td>1600</td>
                  <td>2000</td>
                  <td>5%</td>
                  <td>8:00AM 8 Feb</td>
                  <td>10:00PM 9 Feb</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.histImg}>
                      <img src={require("../../Assets/img/greydp.png")} alt="" />
                      <span>Ayush Singla</span>
                    </div>
                  </td>
                  <td>1600</td>
                  <td>2000</td>
                  <td>5%</td>
                  <td>8:00AM 8 Feb</td>
                  <td>10:00PM 9 Feb</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.histImg}>
                      <img src={require("../../Assets/img/greydp.png")} alt="" />
                      <span>Ayush Singla</span>
                    </div>
                  </td>
                  <td>1600</td>
                  <td>2000</td>
                  <td>5%</td>
                  <td>8:00AM 8 Feb</td>
                  <td>10:00PM 9 Feb</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.histImg}>
                      <img src={require("../../Assets/img/greydp.png")} alt="" />
                      <span>Ayush Singla</span>
                    </div>
                  </td>
                  <td>1600</td>
                  <td>2000</td>
                  <td>5%</td>
                  <td>8:00AM 8 Feb</td>
                  <td>10:00PM 9 Feb</td>
                </tr>
              </table>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div id={styles.portGraph}>
          <div className={styles.container3}>
            <div className={styles.chartdetails}>
              <h5 className={styles.headChart}>Overview of Last Month</h5>
              <div className={`${styles.cbox} ${styles.cbox1}`}>
                <h5>
                  - <i class="fa-solid fa-indian-rupee-sign"></i> 320
                </h5>
                <h5>-3.5%</h5>
                <p className={styles.thisMonth}>Today's PNL</p>
              </div>
              <div className={`${styles.cbox} ${styles.cbox2}`}>
                <h5>
                  + <i class="fa-solid fa-indian-rupee-sign"></i> 1500
                </h5>
                <h5>+9.8%</h5>
                <p className={styles.thisMonth}>Last 30 days PNL</p>
              </div>
              <div className={`${styles.cbox} ${styles.cbox3}`}>
                <h5>
                  <i class="fa-solid fa-indian-rupee-sign"></i> 24500
                </h5>
                <p className={styles.thisMonth}>Current Value</p>
              </div>
            </div>
            <div className={styles.chart}>
              <p
                href="/"
                className={`${styles.cbox} ${styles.chartBtn}`}
                onClick={CloseChart}
              >
                Close
              </p>
              <LineChart chartData={userData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
