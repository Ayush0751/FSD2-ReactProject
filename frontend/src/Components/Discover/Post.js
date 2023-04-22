import React from "react";
import styles from "../../Assets/css/Discover/Feed.module.css";

function Post(props) {
  return (
    <>
    <div className={styles["recentPosts"]}>
      <div className={styles["postTop"]}>
        <div className={styles["trdrDp"]}>
          <img
            src={require("../../Assets/images/Navbar/defaultDP.png")}
            alt=""
          />
        </div>
        <div className={styles["authName"]}>
          <h4>{props.postCreatorName} </h4>
          <p>
            <em>{props.timeOfPost}</em>
          </p>
        </div>
      </div>
      <div className={styles["postDetails"]}>
        <div className={styles["postHeading"]}>
          <p>{props.postText} </p>
        </div>
        <div className={styles["postImage"]}>
        <img
            src={"http://localhost:8081/"+props.postImage}
            alt=""
          />
          {/* <img
                  src={require("../../Assets/images/Discover/platinumBg.jpg")}
                  alt=""
                /> */}
        </div>
        <div className={styles["react"]}>
          <div className={styles["icon"]}>
            <i className={"far fa-thumbs-up"}></i>
            <span> Like</span>
          </div>
          <div className={styles["icon"]}>
            <i class="far fa-comment"></i>
            <span> Comment</span>
          </div>
          <div className={styles["icon"]}>
            <i class="fa fa-share"></i>
            <span> Share</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Post;
