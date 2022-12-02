import React,{useRef,useEffect,useState} from "react";
import styles from "../../Assets/css/Form.module.css"
import styles1 from "../../Assets/css/LoginPage.module.css"
import styles3 from "../../Assets/css/InputField.module.css"
import InputField from "../InputField"
import Button from "../Button"
import data from "../data/data.json"
import { Link, Navigate } from "react-router-dom";

function Form(props) {
  const [name, setname] = useState(" ");
  const [pass, setpass] = useState(" ");
  const [repass, setrePass] = useState(" ");
  const [err1, seterr1] = useState(false);
  const [err2, seterr2] = useState(false);
  const [found , setFoundBit] = useState(false);

  useEffect(()=>{
    if(pass != repass){
      seterr1(true);
    }
    else{
      seterr1(false);
    }

    if(pass.length <4){
      seterr2(true);
    }
    else{
      seterr2(false);
    }
  });


  const dta =(e)=>{  
    data.map((data)=>
    {
      if(data.name == name && data.password == pass){
        // console.log("hihi");
        Navigate('/DashBoard')
        // return true;
      }
      // else false;
      
    }
    );
     
    e.preventDefault();
  }


  const check =(e)=> {
    
    if(!err1 && !err2){
      props.setCnt3() ;
    }
    e.preventDefault();
  }

  const nameInput=(event)=>{
    setname(event.target.value);
  }
  const passInput=(event)=>{
    setpass(event.target.value);
  }
  const rePassInput=(event)=>{
    setrePass(event.target.value);
  }

  return (

    <>
      <img src = {require('../../Assets/images/149071.png')} alt="missing img" className={styles.userImg}></img>
      <form className={styles.form__group}>
          <InputField id = "username" inputClass={styles3["form__field"]} lableClass={styles3["form__label"]} placeHolder="User Name" fun={nameInput} />
          <InputField id = "password" type= "password" inputClass={styles3["form__field"]} lableClass={styles3["form__label"]} placeHolder="Password" fun={passInput} />
          {!props.isRegistered && (
            <InputField id = "confirm" type= "password" inputClass={styles3["form__field"]} lableClass={styles3["form__label"]} placeHolder="Confirm Password" fun={rePassInput}/>
          )}


          {/* <div style ={{display:"flex",alignItems: "center",justifyContent: "center" ,marginTop : "1rem", marginBottom : "-3rem"}}> */}
            {props.isRegistered && (
              <div style ={{display:"flex",alignItems: "center",justifyContent: "center" }}>
                <Link to="/DashBoard">
                <Button classname ={styles1.button} text = " Login" onClick = {dta}/></Link>
                <Link to="/Login">
                <Button classname ={styles1.button} text = " Register" onClick = {props.notRegistered} /></Link>
              </div>
            )}
            {!props.isRegistered && (
              <Button classname ={styles1.button} text = " Register" onClick = {check}/>
            )}
            
          {/* </div> */}
          <div>
              {
                (err1 && !props.isRegistered) &&
                <div style = {{color : "red", margin:"0px" }}>
                  ! Password not matching
                </div>
              }
              {
                err2 &&
                <div style = {{color : "red",margin:"0px"}}>
                  ! atleast 4 letters required
                </div>
              }
              {
                !found &&  props.isRegistered &&
                <div style = {{color : "red",margin:"0px"}}>
                  ! Invalid user
                </div>
              }
          </div>
      </form>
    </>
  );
}

export default Form;
