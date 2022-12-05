import React from "react";
// import { WeavyClient, WeavyProvider, Messenger } from '@weavy/uikit-react';
import styles from "../../Assets/css/UserSubscription/Chat.module.css";

// const getToken = () => {
//     return new Promise(function (resolve, reject) {
//         // typically an api call to your backend which returns a JWT
//         var token = getTokenFromSomewhere();
//         if (token) {
//             resolve(token);
//         } else {
//             reject("Failed to retrieve token");
//         }
//     });
//  }

function Chat(props) {
  //     const weavyClient = new WeavyClient({ url: "https://zrading.weavy.io", tokenFactory:()=>{return "wyu_h4LiqWfP6aEoyb1nMC1PlqIuU3mydX1EbSEH"}})

  return (
    <>
      {/* <div className="App">
           <WeavyProvider client={weavyClient}>
               <Messenger />
           </WeavyProvider>
       </div> */}

      <div className={styles.chatBox}>
        {/* <span></span> */}
        <p className={styles.chattingWith}>Chatting With {props.traderName}</p>
        {/* <hr /> */}
        {/* <hr /> */}
        <p className={styles["chat"] + " " + styles["traderChat"]}>
          {/* <p className={`${styles.chat} ${styles.traderChat}`}> */}
          <span className={styles.text}> Heyy!!</span>
        </p>
        <p className={`${styles.chat} ${styles.traderChat}`}>
          <span className={styles.text}>
            {" "}
            Loremr adipisicing elit. Rem, obcaecati eius odit sit sapiente nam.
          </span>
        </p>
        <p className={`${styles.chat} ${styles.traderChat}`}>
          <span className={styles.time}>
            <em>08:23pm</em>
          </span>
        </p>
        <p className={`${styles.chat} ${styles.userChat}`}>
          <span className={styles.userText}> Heyy!!</span>
        </p>
        <p className={`${styles.chat} ${styles.userChat}`}>
          <span className={styles.userText}>
            {" "}
            Lorem ipsuti eius odit sit sapiente nam.
          </span>
        </p>
        <p className={`${styles.chat} ${styles.traderChat}`}>
          <span className={styles.time2}>
            <em>08:43pm</em>
          </span>
        </p>
        <div className={styles.msgBox}>
          <textarea
            name=""
            id=""
            cols="82"
            rows="2"
            placeholder="Type a message"
            className={styles.sendMsg}
          ></textarea>
          <button className={styles.sendBtn}>send</button>
        </div>
      </div>
    </>
  );
}

export default Chat;
