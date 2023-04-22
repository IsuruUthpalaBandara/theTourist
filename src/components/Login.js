import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Alert } from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ReturnHome from "./ReturnHome";

        const Login = () => {
        const [error, setError] = useState(false);
        const [errorMessage, setErrorMessage] = useState("")
        const navigate = useNavigate();
      
        const onFinish = (values) => {
          setError(false)
          console.log("Success:", values);
          axios.post("http://localhost:3001/api/login", {
              email: values.email,
              password: values.password,
            })
            .then(function (response) {
              // handle success
                     
             const token = response.data
             localStorage.setItem("token",token);
             alert("successfully logged in!")
             navigate("/");
             
              
            })
            .catch(function (error) {
              // handle error
              setError(true);
              setErrorMessage(error.response.data.message)
              console.log(error);
            })
            .finally(function () {
              // always executed
            });
        };
        const onFinishFailed = (errorInfo) => {
          console.log("Failed:", errorInfo);
        };
      
      
        return (
          <>
            {error ? (
              <Alert
                message="Error"
                description={errorMessage}
                type="error"
                showIcon
              />
            ) : null}
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
      
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
      
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
      
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <ReturnHome/>
          </>
        );
      };

    

    







export default Login;
