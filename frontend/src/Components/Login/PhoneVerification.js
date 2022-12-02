// {/*npm install react-phone-number-input --save*/}
import 'react-phone-number-input/style.css'
import React , {useState} from "react";
import styles from "../../Assets/css/Form.module.css"
import styles1 from "../../Assets/css/LoginPage.module.css"
import styles3 from "../../Assets/css/InputField.module.css"
import InputField from "../InputField"
import Button from "../Button"
import PhoneInput from 'react-phone-number-input'

function PhoneVerification(props) {
  const [value, setValue] = useState()
  const [errBit, setErr] = useState(1)
  const [otpBit,setOTP] = useState(1)
  const handleClick =()=> {
    if((''+value).length >11 && (''+value).length <14){
      console.log("COOL");
    }
    else{
      setErr(0);
    }
  }
  const checkOTP =()=> {
    if((document.getElementById("Verify").value)=="0000"){
      console.log("cooo0o0ooL");
      props.isVerified()
    }
    else{
      setOTP(0);
    }
  }
        return (
          <>
          <h1 class = {styles.h1text}>Phone number Verification </h1>
          {!errBit &&
            <p style = {{color : "red", margin:"0"}}>
              ! Enter a valid number
            </p>
          }


            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry ="US"
              className = {styles.phoneInputField}/>
            <InputField iid = "Verify" inputClass={styles3["form__field"]} lableClass={styles3["form__label"]} placeHolder="OTP" />
            {!otpBit &&
              <p style = {{color : "red", margin:"0"}}>
                ! Invalid OTP
              </p>
            }
            <div style = {{display:"flex",alignItems: "center",justifyContent: "center"}}>
              <Button classname ={styles1.button} text = "Send OTP" onClick={handleClick}/>
              <Button classname ={styles1.button} text = "Verify" onClick={checkOTP}/>
            </div>

          </>
      )
}

export default PhoneVerification;
