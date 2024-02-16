"use client";
import { Typography, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useForm, useWatch } from "antd/lib/form/Form";

export default function LoginPage() {
  type FieldType = {
    username?: string;
    password?: string;
  };

  const [form] = useForm();

  const username = useWatch("username", form);
  const password = useWatch("password", form);

  const [data, setData] = useState<FieldType>({ username: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = () => {
    const formData = form.getFieldsValue();
    setData(formData);
    setIsLogin(true);
    alert("Login success!!!");
  };

  return (
    <div style={{ backgroundColor: "#fff", padding: "25px" }}>
      <Typography style={{ fontSize: "25px", marginBottom: "15px" }}>
        Login
      </Typography>
      <Form form={form} onFinish={handleSubmit}>
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
      {/* {isLogin && (
        <div>
          <Typography color="#000">{`Username: ${data.username}`}</Typography>
          <Typography color="#000">{`Password: ${data.password}`}</Typography>
        </div>
      )} */}
      <div>
        <Typography color="#000">{`Username: ${username}`}</Typography>
        <Typography color="#000">{`Password: ${password}`}</Typography>
      </div>
    </div>
  );
}
