import React from 'react'
import { Button, Space } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReturnHome from './ReturnHome';




const tkn = localStorage.getItem("token");

const Balance = () => {
   const navigate = useNavigate();
   const checkBalance=()=>{
   axios.get("http://localhost:3001/api/balance",{

   headers: {authorization: 'Bearer '+ tkn}

   }).then(function (response) {
    // handle success
    
    alert("your account balance = " + JSON.stringify(response.data[0].balance));
     
    
  })
  .catch(function (error) {
    // handle error
    alert("Token Expired! Please Log In")
    navigate("/login")
    
    
  
  })
  .finally(function () {
    // always executed
  });

  }

  return(

  <div>
  
  <Space wrap>
    <Button type="primary" onClick={checkBalance}>Check Balance</Button>
  </Space>

  
  <ReturnHome/>
  </div>
  )
}
  
export default Balance;