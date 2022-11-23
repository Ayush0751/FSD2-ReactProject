// import React from "react";
// import styles from "../../Assets/css/Discover/Feed.module.css";

// function Feed(props) {
//   return (
//     <>
//       <div className={styles["feedOuterContainer"]}>
//         <div className={styles["feedInner"]}>
//           <div className={styles["post"]}>
//             <div className={styles["postTop"]}>
//               <div className={styles["dp"]}>
//                 <img
//                   src={require("../../Assets/images/Navbar/defaultDP.png")}
//                   alt=""
//                 />
//               </div>
//               <div className={styles["textAr"]}>
//                 <form action="" method="POST">
//                   <input
//                     size="50"
//                     type="text"
//                     name="post_text"
//                     placeholder="What's on your mind"
//                   />
//                   <br />
//                   <button>Post</button>
//                 </form>
//               </div>
//             </div>

//             <div className={styles["post-bottom"]}>
//               <div className={styles["action"]}>
//                 <i className={"fa fa-image"}></i>
//                 <span>Photo/Video</span>
//               </div>
//             </div>
//           </div>

//           <div className={styles["recentPosts"]}>
//             <div className={styles["postTop"]}>
//               <div className={styles["trdrDp"]}>
//                 <img
//                   src={require("../../Assets/images/Navbar/defaultDP.png")}
//                   alt=""
//                 />
//               </div>
//               <div className={styles["authName"]}>
//                 <h4>{props.postCreatorName} </h4>
//                 <p>
//                   <em>{props.timeOfPost}</em>
//                 </p>
//               </div>
//             </div>
//             <div className={styles["postDetails"]}>
//               <div className={styles["postHeading"]}>
//                 <p>
//                   {props.postText}{" "}
//                 </p>
//               </div>
//               <div className={styles["postImage"]}>
//                 <img
//                   src={require("../../Assets/images/Discover/".concat(
//                     props.postImage))}
//                   alt=""
//                 />
//                 {/* <img
//                   src={require("../../Assets/images/Discover/platinumBg.jpg")}
//                   alt=""
//                 /> */}
//               </div>
//               <div className={styles["react"]}>
//                 <div className={styles["icon"]}>
//                   <i className={"far fa-thumbs-up"}></i>
//                   <span> Like</span>
//                 </div>
//                 <div className={styles["icon"]}>
//                   <i class="far fa-comment"></i>
//                   <span> Comment</span>
//                 </div>
//                 <div className={styles["icon"]}>
//                   <i class="fa fa-share"></i>
//                   <span> Share</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles["otherList"]}>
//           <div className={styles["card1"]}>
//             <h2>Top traders of the week</h2>
//             <div className={styles["copiers"]}>
//               <div className={styles["copiersPic"]}>
//                 <img
//                   src={require("../../Assets/images/Navbar/defaultDP.png")}
//                   alt=""
//                 />
//               </div>
//               <div className={styles["copiersName"]}>
//                 <p>Ayush Raj</p>
//               </div>
//               <div className={styles["copiersProfit"]}>
//                 <p>+15%</p>
//               </div>
//             </div>
//           </div>
//           <div className={styles["card2"]}>
//             <h2>Top copiers of the week</h2>
//             <div className={styles["copiers"]}>
//               <div className={styles["copiersPic"]}>
//                 <img
//                   src={require("../../Assets/images/Navbar/defaultDP.png")}
//                   alt=""
//                 />
//               </div>
//               <div className={styles["copiersName"]}>
//                 <p>Ayush Raj</p>
//               </div>
//               <div className={styles["copiersProfit"]}>
//                 <p>+15%</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Feed;
