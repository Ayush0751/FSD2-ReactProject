import axios from "axios";
// import async from "hbs/lib/async";

 const DeleteOrder =  async(id) => {
    let data;
    try {
        console.log(id,"idddd");
        const order = await (axios.delete("http://localhost:8081/api/copy/delete-order/"+id));
        console.log(order.data);
        alert('Order Closed Successfully')
        // data=order.data.result
      } catch (error) {
        // console.error("errorfsfsf");
        console.error(error);
        // alert(error)
      }
      return data;
    

  };

  export default DeleteOrder