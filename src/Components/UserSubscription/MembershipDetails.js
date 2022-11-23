import React,{useState,useEffect} from 'react'
import styles from "../../Assets/css/UserSubscription/MembershipDetails.module.css";

function MembershipDetails(props) {
    const [showPlans, setshowPlans] = useState("hide")
    // setclickedEvent(props.clicked);
    useEffect(() => {
        if(props.clicked===true){
            setshowPlans("show")
            console.log({showPlans},showPlans);
        }
        else{
            setshowPlans("hide");
            console.log({showPlans});
        }

    })

    const planGold = ()=>{
        setplanType("goldPlan")
        setgoldClass("show")
        setplatClass("hide")
    }
    const planPlat = ()=>{
        setplanType("platinumPlan")
        setplatClass("show")
        setgoldClass("hide")
        
    }
    const closePlans = ()=>{
        setshowPlans("hide")
        props.clicked=false;
    }
    const [planType, setplanType] = useState("goldPlan")
    const [goldClass, setgoldClass] = useState("show")
    const [platClass, setplatClass] = useState("hide")
  return (
    <div>
        <div className={styles['plans']+" "+styles[showPlans]}>
            {/* <div className={`${styles.plans} ${styles.showPlans}`}> */}
            <div className={styles["plansHeading"]}>
                <p onClick={planGold}>Gold</p>
                <p onClick={planPlat}>Platinum</p>
            </div>
            <div className={styles[goldClass]}>
                <div className={styles['goldPlan']}>
                    {/* <div className={styles["line"]}></div> */}
                    <h2>Gold Plan</h2>
                    <li>Be a part of a group of vivid learner.</li>
                    <li>Learn trading with personalised.</li>
                    <li>Be a part of a group of vivid learner.</li>
                    <li>Learn trading with personalised.</li>
                    <li>Get calls from your favourite trade.</li>
                    <li>Get calls from your favourite trade.</li>
                    <li>Get calls from your favourite trade.</li>
                    <button >499/Month</button>
                    <button onClick={closePlans} className={styles['closeBtn']}>Close</button>
                </div>
            </div>
            <div className={styles[platClass]}>
                <div className={styles['platPlan']}>
                    <h2>Platinum Plan</h2>
                    <li>Be a part of a group of vivid learner.</li>
                    <li>Learn trading with personalised.</li>
                    <li>Be a part of a group of vivid learner.</li>
                    <li>Learn trading wour favourite trade.</li>
                    <li>Learn trading with personalised.</li>
                    <li>Learn trading wour favourite trade.</li>
                    <li>Get calls from your favourite trade.</li>
                    <button>799/Month</button>
                    <button onClick={closePlans} className={styles['closeBtn']}>Close</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default MembershipDetails