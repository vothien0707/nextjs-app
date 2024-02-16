"use client";
import { Typography, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function LoginPage() {
  type FieldType = {
    username?: string;
    password?: string;
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const onFinish = (values: any) => {
    setUsername(values.username);
    setPassword(values.password);
    setIsLogin(true);
    alert("Login success!!!");
  };

  const onFinishFailed = (errorInfo: any) => {
    alert("Login fail!!!");
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
          <Input prefix={<UserOutlined />} placeholder="Username" />
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
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Log in</Button>
        </Form.Item>
      </Form>
      {isLogin && (
        <div>
          <Typography color="#000">{`Username: ${username}`}</Typography>
          <Typography color="#000">{`Password: ${password}`}</Typography>
        </div>
      )}
    </div>
  );
}
