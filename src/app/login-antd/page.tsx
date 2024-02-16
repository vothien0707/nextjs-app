"use client";
import { Typography, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const loginForm = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    onSubmit: async (values) => {
      loginForm.resetForm();
      setUsername(values.username);
      setPassword(values.password);
      setIsLogin(true);
    },
  });

  return (
    <div style={{ backgroundColor: "#fff", padding: "25px" }}>
      <Typography style={{ fontSize: "25px", marginBottom: "15px" }}>
        Login
      </Typography>
      <Form name="normal_login" onFinish={loginForm.handleSubmit}>
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please enter your username" },
            { min: 8, message: "Username minimum 8 characters" },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            {...loginForm.getFieldProps("username")}
          />
        </Form.Item>
        <Form.Item
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
            {...loginForm.getFieldProps("password")}
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
