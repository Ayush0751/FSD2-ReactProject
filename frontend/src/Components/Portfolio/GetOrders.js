import axios from "axios";
// import async from "hbs/lib/async";

 const handleCopy =  async(e) => {
    let data;
    try {
        console.log("hii");
        const order = await ( axios.get("http://localhost:8081/api/copy/getOrders"));
        console.log("hii");
        // console.log(order.data.result);
        data=order.data.result
      } catch (error) {
        // console.error("errorfsfsf");
        console.error(error);
      }
      return data;
    

  };

  export default handleCopy