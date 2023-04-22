import React, {useState} from 'react'
import './Signin.css'
import Axios from 'axios'

 const Signin=()=> {

  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');

 const submit=()=>{
    Axios.post("http://localhost:3001/api/insert_signup",{
      first_name:firstName,
      last_name:lastName,
      email_address:email,
      pass:pass}).then(()=>{
        alert("Insert success!");
      })

 }

  return (
    
    <center>
    <div class="form">
    <div class="title">Welcome</div>
    <div class="subtitle">Let's create your account!</div>
    <div class="input-container ic1">
      <input id="firstname" class="input" type="text"  placeholder=" " name="firstName" onChange={(e)=>{setFirstName(e.target.value)}}/>
      <div class="cut"></div>
      <label for="firstname" class="placeholder" >First name</label>
    </div>
    <div class="input-container ic2">
      <input id="lastname" class="input" type="text" placeholder=" "  name="lastName" onChange={(e)=>{setLastName(e.target.value)}}/>
      <div class="cut"></div>
      <label for="lastname" class="placeholder">Last name</label>
    </div>
    <div class="input-container ic2">
      <input id="email" class="input" type="text" placeholder=" "  name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
      <div class="cut cut-short"></div>
      <label for="email" class="placeholder">Email</label>
    </div>
    <div class="input-container ic2">
      <input id="pass" class="input" type="text" placeholder=" "  name="pass" onChange={(e)=>{setPass(e.target.value)}}/>
      <div class="cut cut-short"></div>
      <label for="pass" class="placeholder">Password</label>
    </div>
    <button type="text" class="submit" onClick={submit}>submit</button>
    
  </div>
  </center>
  

  )
}

export default  Signin;