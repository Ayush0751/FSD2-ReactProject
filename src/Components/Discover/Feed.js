import React from "react";
import styles from "../../Assets/css/Discover/Feed.module.css";
import Post from "./Post"
import Copiers from "./Copiers"
import Traders from "./Traders"
import Navbar from "../Navbar/Navbar";

function Feed(props) {
  return (
    <>
    <Navbar/>
      <div className={styles["feedOuterContainer"]}>
        <div className={styles["feedInner"]}>
          <div className={styles["post"]}>
            <div className={styles["postTop"]}>
              <div className={styles["dp"]}>
                <img
                  src={require("../../Assets/images/Navbar/defaultDP.png")}
                  alt=""
                />
              </div>
              <div className={styles["textAr"]}>
                <form action="" method="POST">
                  <input
                    size="50"
                    type="text"
                    name="post_text"
                    placeholder="What's on your mind"
                  />
                  <br />
                  <button>Post</button>
                </form>
              </div>
            </div>

            <div className={styles["post-bottom"]}>
              <div className={styles["action"]}>
                <i className={"fa fa-image"}></i>
                <span>Photo/Video</span>
              </div>
            </div>
          </div>

          <div className={styles["recentPosts"]}>
            <Post postCreatorName = "Ayush Raj" timeOfPost="5 hrs ago" postText="Bitcoin’s stealth rally erases its losses for the year Bitcoin’s stealth rally erases its losses for the year Bitcoin’s stealth rally erases its losses for the year  " postImage = "platinumBg.jpg"/>
            <Post postCreatorName = "Ayush Dingla" timeOfPost="4 hrs ago" postText="Bitcoin’s stealth rally erases its losses for the year Bitcoin’s stealth rally erases its losses for the year Bitcoin’s stealth rally erases its losses for the year  " postImage = "goldBg.jpg"/>
            <Post postCreatorName = "Praveen Raj" timeOfPost="10 hrs ago" postText="Bitcoin’s stealth rally erases its losses for the year Bitcoin’s stealttyfyf fhjgjd hgdhw wge hevhr the year  " postImage = "platinumBg.jpg"/>
            <Post postCreatorName = "Sanu Khan" timeOfPost="23 hrs ago" postText="Bitcoin’s stealdehbb hbbed fbefe hbfhrf ewn fosses for the year  " postImage = "goldBg.jpg"/>
          </div>
        </div>

        <div className={styles["otherList"]}>
          <div className={styles["card1"]}>
            <h2>Top traders of the week</h2>
            <Copiers copierName = "Dingla(Org)" copierProfit="+50%" />
            <Copiers copierName = "Singla Dingla" copierProfit="-70%" />
            <Copiers copierName = "Sanu Dingla" copierProfit="+1%" />
          </div>
          <div className={styles["card2"]}>
            <h2>Top Traders of the week</h2>
            <Traders traderName = "Dingla(Org)" traderProfit="+50%" />
            <Traders traderName = "Singla Dingla" traderProfit="-70%" />
            <Traders traderName = "Sanu Dingla" traderProfit="+1%" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
