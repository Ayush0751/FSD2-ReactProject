import { Modal, useMantineTheme } from '@mantine/core';
import React, { useState,useContext} from 'react'
function ProfileModal({modalOpened,setModalOpened}) {

  const theme = useMantineTheme();
  const usernamepattern=/^[a-z][0-9a-z]{6,}$/i;
  const [profd,setprofd]=useState({FirstName:"",LastName:"",worksAT:"",livesIN:"",Country:"",Status:""});
  const handleChange=(e)=>{
    setprofd({...profd,[e.target.name]:e.target.value});
  };
  const updateHandler =(event)=>{
    event.preventDefault();
    if(!usernamepattern.test(profd.FirstName)){
      alert("Enter username as per requirements:\n1.Should contain only alphabets\n2.length should be between 3 and 24")
    }
    if(!usernamepattern.test(profd.LastName)){
      alert("Enter Lastname as per requirements:\n1.Should contain only alphabets\n2.length should be between 3 and 24")
    }
    


  }
  return (

    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
     <form className='infoForm' onSubmit={updateHandler}>
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="User Name"
            onChange={handleChange}
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        

        <div>
          <input
            type="email"
            className="infoInput"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />

        </div>

        <div>
          <input
            type="number"
            className="infoInput"
            name="Phonenumber"
            placeholder="MobileNumber"
            onChange={handleChange}
          />
        </div>
    

        <button className="button infoButton" type='submit'>Update</button>

     </form>
    </Modal>
  );
}

export default ProfileModal;