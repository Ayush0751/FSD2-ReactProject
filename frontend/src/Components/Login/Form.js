import React,{useRef,useEffect,useState} from "react";
import styles from "../../Assets/css/Form.module.css"
import styles1 from "../../Assets/css/LoginPage.module.css"
import styles3 from "../../Assets/css/InputField.module.css"
import InputField from "../InputField"
import Button from "../Button"
import data from "../data/data.json"
import { Link, Navigate, useNavigate } from "react-router-dom";

import axios from "axios";
import LoadingScreen from "react-loading-screen";


function Form(props) {
  const [email, setemail] = useState(" ");
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

  const emailInput=(event)=>{
    setemail(event.target.value);
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


  const navigate = useNavigate();
  const navigateTo = () => navigate("/dashboard", { replace: true });
  const handleSubmit = async (e, props) => {
    console.log(name);
    console.log(pass);
    setLoadingState(true);
    e.preventDefault();
    const user = await axios.post(
      "http://localhost:8081/api/users/login",
      {
        email: email,
        password: pass,
      }
    );
    if (user.length === 0) {
      console.log("Login failed!");
      return 0;
    } else {
      console.log("Login successful!");
      // const history =useHistory();
      setLoadingState(false);
      navigateTo();
    }
  };

  useEffect((e) => {
    // temp(e, "cipla");

    setLoadingState(false);
  }, []);


  const handleRegister = async (e) => {
    setLoadingState(true);
    e.preventDefault();
    console.log(name);
    const user = await axios.post('http://localhost:8081/api/users/signup', {
      name: name,
      email:email,
      password: pass
    });
    if(user.length === 0){
      console.log('Signup failed!');
    }
    else{
      console.log('Signup successful!');
      setLoadingState(false);
      navigateTo();
    }
  };
  useEffect((e) => {
    // temp(e, "cipla");

    setLoadingState(false);
  }, []);

  let [loadingState, setLoadingState] = useState(false);

  return (

    <>
      <img src = {require('../../Assets/images/149071.png')} alt="missing img" className={styles.userImg}></img>
      <form className={styles.form__group} >
          <InputField value="" id = "email" inputClass={styles3["form__field"]} lableClass={styles3["form__label"]} placeHolder="E-Mail" fun={emailInput} />

          {!props.isRegistered && (
            <div>
            <InputField id = "name" type= "name" inputClass={styles3["form__field"]} lableClass={styles3["form__label"]} placeHolder="Name" fun={nameInput}/> 
            </div>
          )}

          <InputField id = "password" type= "password" inputClass={styles3["form__field"]} lableClass={styles3["form__label"]} placeHolder="Password" fun={passInput} />
          {!props.isRegistered && (
            <div>
            <InputField id = "confirm" type= "password" inputClass={styles3["form__field"]} lableClass={styles3["form__label"]} placeHolder="Confirm Password" fun={rePassInput}/></div>
          )}


          {/* <div style ={{display:"flex",alignItems: "center",justifyContent: "center" ,marginTop : "1rem", marginBottom : "-3rem"}}> */}
            {props.isRegistered && (
              <div style ={{display:"flex",alignItems: "center",justifyContent: "center" }}>
                <Link to="/DashBoard">
                <Button classname ={styles1.button} text = " Login" onClick={handleSubmit}/></Link>
                <Link to="/Login">
                <Button classname ={styles1.button} text = " Register" onClick = {props.notRegistered} /></Link>
              </div>
            )}
            {!props.isRegistered && (
              <Button classname ={styles1.button} text = " Register" onClick = {handleRegister}/>
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
