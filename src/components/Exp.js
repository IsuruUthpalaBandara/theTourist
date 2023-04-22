import React from 'react'
import jwt_decode from "jwt-decode"
import { Button, Space } from 'antd';
import './Exp.css'



const Exp=()=> {

      const check=()=>{

        const token = localStorage.getItem("token")
        const decoded = jwt_decode(token);
        const iat = parseInt(JSON.stringify(decoded.iat))
        const exp = parseInt(JSON.stringify(decoded.exp))
        const presentTime=parseInt((new Date().getTime() / 1000).toFixed(0))
        
        if(presentTime>exp){
            
            alert("Time Out! Please Log in again! expired at :"+exp)
            
        }
        else{

            alert("You still got time! time expires at : "+exp + ".  started at "+iat)

    
        }


    }

    return(
        <>

        <Space wrap>
        <Button type="primary" danger onClick={check} className="Exp">--- exp? ---</Button>
        </Space>
    
        
        
        </>

    )
  
    

}

export default Exp;




