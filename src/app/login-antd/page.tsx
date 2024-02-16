"use client";
import { Typography, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function LoginPage() {
  type FieldType = {
    username?: string;
    password?: string;
  };

  const [data, setData] = useState<FieldType>({ username: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);

  const onFinish = (values: any) => {
    setData(values);
    setIsLogin(true);
    alert("Login success!!!");
  };

  const onFinishFailed = (errorInfo: any) => {
    alert("Login fail!!!");
  };

  const handleInputChange = (name: string, value: string) => {
    console.log(value);
    setData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(data);
  };

  return (
    <div style={{ backgroundColor: "#fff", padding: "25px" }}>
      <Typography style={{ fontSize: "25px", marginBottom: "15px" }}>
        Login
      </Typography>
      <Form
        name="normal_login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item<FieldType>
          name="username"
          rules={[
            { required: true, message: "Please enter your username" },
            { min: 8, message: "Username minimum 8 characters" },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 8, message: "Password minimum 8 characters" },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Log in</Button>
        </Form.Item>
      </Form>
      {/* {isLogin && (
        <div>
          <Typography color="#000">{`Username: ${data.username}`}</Typography>
          <Typography color="#000">{`Password: ${data.password}`}</Typography>
        </div>
      )} */}
      <div>
        <Typography color="#000">{`Username: ${data.username}`}</Typography>
        <Typography color="#000">{`Password: ${data.password}`}</Typography>
      </div>
    </div>
  );
}
