import React from 'react'
import LoadAccounts from './components/LoadAccount'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile=()=> {

    
  const tkn = localStorage.getItem("token");
  const navigate = useNavigate();
  axios.get("http://localhost:3001/api/profile",{

  headers: {authorization: 'Bearer '+ tkn}

  }).then(
   // handle success
   
   navigate("profile")
  
    
   
 )
 .catch(function (error) {
   // handle error
   alert("Token Expired! Please Click ok and Log In again!")
   navigate("/login")
   console.log(error)
   
 
 })
 .finally(function (response) {
    
  navigate("/login")
   
 });

 
  return (
    <div>
        <LoadAccounts/>
    </div>
  )
}
 export default Profile;