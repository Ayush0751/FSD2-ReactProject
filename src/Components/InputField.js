import React from "react";

function InputField(props) {
  return (
    <>
      <div className ="inputParent">
        <label  htmlFor={props.id} className={props.lableClass}>{props.placeHolder}</label>
        <input ref = {props.ref} type ={props.type} tag = {props.tag} id ={props.iid} placeholder={props.placeHolder} className={props.inputClass} onChange={props.fun}/>
      </div>
    </>

  );
}

export default InputField;
