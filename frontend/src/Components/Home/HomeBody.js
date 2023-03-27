import React from "react";

import styles2 from "../../Assets/css/Home/HomeBody.module.css";
import LineChart from "../LineChart";
import { useState } from "react";
import { UserData } from "../Data";
import { Chart as ChartJS } from "chart.js/auto";
import Navbar from '../Navbar/Navbar';
import { Link , useLocation} from "react-router-dom";
import AddFundPopUp from '../AddFund/AddFundPopUp'



// import  Slider  from "./Slider";

export default function HomeBody() {
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
    width: "30%",
  });
  const [isClicked, setisClicked] = useState(false);
  const onclck =()=> {
    setisClicked(true);
  }
  const onClose =()=> {
    setisClicked(false);
  }

  const loc = useLocation();
  const {state} = loc;
  // const { name , email} = state;

  return (
    <div>
      <Navbar/>
      <div className={styles2.container1}>
        <div className={styles2.tile1}>
          <div className={styles2.note}>
            <p className={styles2.welNote}>Welcome to Zrading</p>
            <div className={styles2.flex1}>
            {/* <Link to="/DepositFunds"> */}
              <button className={`${styles2.button} ${styles2.btn3}`} onClick={onclck}>
                Deposit Funds
              </button>
              {/* </Link> */}
            </div>
            {/* <a className={styles2.depoBtn}>Deposit Funds</a> */}
          </div>
          <div className={styles2.depositPic}></div>
        </div>
        <div className={styles2.tile2}>
          <a href="/">
            <div className={styles2.tile2_content}>
              <p className={styles2.certAd1}>Get paid for Your service</p>
              <p className={styles2.certAd2}>Become a Certified Trader</p>
              <div className={styles2.tile2_pic}></div>
            </div>
          </a>
        </div>
      </div>
      <div className={styles2.container2}>
        <div className={styles2.Container_ticker}>
          <div className={styles2.ticker_tile}>
            <div className={styles2.tickerUp}>
              <span className={styles2.userId}>AyuS028</span>
              <span className={styles2.stars}>
                <span>4</span>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
            <div className={styles2.tickerDown}>
              <div className={styles2.downLeft}>
                <p className={styles2.TickerPoints}>1346</p>
                <p className={styles2.TickPoint_change}>+16</p>
              </div>
              <div className={styles2.downRight}>
                <img src={require("../../Assets/img/greydp.png")} alt="" />
              </div>
            </div>
          </div>
          <div className={styles2.ticker_tile}>
            <div className={styles2.tickerUp}>
              <span className={styles2.userId}>AyuS028</span>
              <span className={styles2.stars}>
                <span>4</span>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
            <div className={styles2.tickerDown}>
              <div className={styles2.downLeft}>
                <p className={styles2.TickerPoints}>1346</p>
                <p className={styles2.TickPoint_change}>+16</p>
              </div>
              <div className={styles2.downRight}>
                <img src={require("../../Assets/img/greydp.png")} alt="" />
              </div>
            </div>
          </div>
          <div className={styles2.ticker_tile}>
            <div className={styles2.tickerUp}>
              <span className={styles2.userId}>AyuS028</span>
              <span className={styles2.stars}>
                <span>4</span>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
            <div className={styles2.tickerDown}>
              <div className={styles2.downLeft}>
                <p className={styles2.TickerPoints}>1346</p>
                <p className={styles2.TickPoint_change}>+16</p>
              </div>
              <div className={styles2.downRight}>
                <img src={require("../../Assets/img/greydp.png")} alt="" />
              </div>
            </div>
          </div>
          <div className={styles2.ticker_tile}>
            <div className={styles2.tickerUp}>
              <span className={styles2.userId}>AyuS028</span>
              <span className={styles2.stars}>
                <span>4</span>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
            <div className={styles2.tickerDown}>
              <div className={styles2.downLeft}>
                <p className={styles2.TickerPoints}>1346</p>
                <p className={styles2.TickPoint_change}>+16</p>
              </div>
              <div className={styles2.downRight}>
                <img src={require("../../Assets/img/greydp.png")} alt="" />
              </div>
            </div>
          </div>
          <div className={styles2.ticker_tile}>
            <div className={styles2.tickerUp}>
              <span className={styles2.userId}>AyuS028</span>
              <span className={styles2.stars}>
                <span>4</span>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
            <div className={styles2.tickerDown}>
              <div className={styles2.downLeft}>
                <p className={styles2.TickerPoints}>1346</p>
                <p className={styles2.TickPoint_change}>+16</p>
              </div>
              <div className={styles2.downRight}>
                <img src={require("../../Assets/img/greydp.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles2.container3}>
        <div className={styles2.chartdetails}>
          <h5 className={styles2.headChart}>Overview of Last Month</h5>
          <div className={`${styles2.cbox} ${styles2.cBox1}`}>
            <h5>Rs 16000</h5>
            <p className={styles2.thisMonth}>This Month Earning</p>
          </div>
          <div className={`${styles2.cbox} ${styles2.cBox2}`}>
            <h5>Rs 21000</h5>
            <p className={styles2.thisMonth}>Current Balance</p>
          </div>
          <Link to="/Portfolio" className={`${styles2.cbox} ${styles2.chartBtn}`}>
            Click for Details
          </Link>
        </div>
        <div className={styles2.chart}>
          <LineChart chartData={userData} />
        </div>
      </div>
      <div className={styles2.container4}>
        <div className={styles2.contLeft}>
          <h3>News & Update</h3>
          <div className={styles2.news_sec}>
            <h6>36% off For pixel lights Couslations Types.</h6>
            <p className={styles2.newsBody}>Lorem Ipsum is simply dummy...</p>
          </div>
          <div className={styles2.news_sec}>
            <h6>We are produce new product this.</h6>
            <p className={styles2.newsBody}>Lorem Ipsum is simply dummy...</p>
          </div>
          <div className={styles2.news_sec}>
            <h6>50% off For COVID Couslations Types.</h6>
            <p className={styles2.newsBody}>Lorem Ipsum is simply dummy...</p>
          </div>
          <a href="/">More...</a>
        </div>
        <div className={styles2.contRight}>
         {/* <Slider/> */}

        </div>
      </div>
      {
        isClicked &&
        <AddFundPopUp close = {onClose}/>
        
        
      }
    </div>
  );
}
