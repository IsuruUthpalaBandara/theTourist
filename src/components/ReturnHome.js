import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Space } from 'antd';
import "./ReturnHome.css"

const ReturnHome=()=> {

    const navigate=useNavigate();

    const return_home=()=>{

        navigate("/");

    }


  return (

    <div>

  <Space wrap>
    <Button type="primary" className="ReturnHome" onClick={return_home}>Return Home</Button>
  </Space>



    </div>
    
  )
}

export default ReturnHome;
