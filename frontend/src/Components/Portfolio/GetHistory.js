import axios from "axios";
// import async from "hbs/lib/async";

 const handleHistory =  async(e) => {
    let data;
    try {
        console.log("hii1");
        const order = await ( axios.get("http://localhost:8081/api/copy/showHistory"));
        console.log("hiiiiiiiiiiiiiiiiiiiiii");
        console.log(order.data.result, "history");
        data=order.data.result
      } catch (error) {
        // console.error("errorfsfsf");
        console.error(error);
      }
      return data;
    

  };

  export default handleHistory