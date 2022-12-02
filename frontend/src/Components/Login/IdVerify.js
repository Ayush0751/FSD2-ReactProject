import React, { useState } from "react";
import styles from "../../Assets/css/Form.module.css"
import styles1 from "../../Assets/css/LoginPage.module.css"
import Button from "../Button"
import img from "../../Assets/images/11.png"
function IdVerify(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <h1 className={styles.h1text}>Upload ID for Verification</h1>
      {selectedImage && (
        <div  class = {styles.uploadPdf}>
        {/*<img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />*/}
        <img class = {styles.pdf} alt="not fount"  src= {img}/> 
        <span class = {styles.childd} style={{color:"white"}}>{selectedImage.name}</span>
        <button class = {styles.pdfCross} onClick={()=>setSelectedImage(null)}> X </button>
        </div>
      )}
      <br />

      <br />
      {selectedImage == null &&
        <input
        type="file"
        name="myImage"
        className={styles["phoneInputField"] + " " +styles["idInputField"]}
        onChange={(event) => { 
          setSelectedImage(event.target.files[0]);
        }}
      />}
      <Button classname ={styles1.button} text = " Confirm " />
    </>
);
}

export default IdVerify;
