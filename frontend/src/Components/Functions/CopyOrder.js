import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

function CopyOrder(props) {
  const [amt, setAmt] = useState("0");
  const [stpls1, setStpls1] = useState("");
  const [stpgn1, setStpgn1] = useState("");
  const { amount, stpgn, stpls, flag } = props;

  useEffect(()=>{
    setStpgn1(stpgn)
    setStpls1(stpls)
    setAmt(amount)
  },[])

  const handleCopy = () => {
    // const order = await axios.post(
    //   "http://localhost:8081/api/copy/copy-order",
    //   {
    //     // amount: amt,
    //     // stoploss: stpls,
    //     // stopgain: stpgn,
    //   }
    // );
    // if (order.length === 0) {
    //   console.log("Order Failed!");
    // } else {
    //   console.log("Order Placed Successfully!");
    //   alert("Order Placed Successfully!");
    //   //   setLoadingState(false);
    //   //   navigateTo();
    // }
    console.log("hii");
    console.log(amt, "amount");
    console.log(stpls1, "stpls1");
    console.log(stpls1, "stpls");
  };
  return <div>{flag && handleCopy()}</div>;
}

export default CopyOrder;
