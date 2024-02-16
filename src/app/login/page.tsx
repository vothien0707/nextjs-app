"use client";
import { Typography, Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const loginForm = useFormik({
    initialValues: {
      password: "",
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "username minimum 8 characters")
        .required("username is required"),
      password: Yup.string()
        .min(8, "password minimum 8 characters")
        .required("password is required"),
    }),
    onSubmit: async (values) => {
      loginForm.resetForm();
      setUsername(values.username);
      setPassword(values.password);
      setIsLogin(true);
    },
  });

  return (
    <Box
      sx={{
        width: { xs: "80%", sm: "60%", md: "50%" },
        px: "20px",
        pt: "20px",
        mx: "auto",
        mt: { xs: "40%", sm: "30%", md: "15%" },
        backgroundColor: "#fff",
        borderRadius: "15px",
      }}
    >
      <Typography color="#000" fontSize={25} sx={{ mb: "20px" }}>
        Login
      </Typography>
      <Box component="form" onSubmit={loginForm.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            type="text"
            placeholder="username"
            name="username"
            fullWidth
            color="success"
            value={loginForm.values.username}
            onChange={loginForm.handleChange}
            error={
              loginForm.touched.username &&
              loginForm.errors.username !== undefined
            }
            helperText={loginForm.touched.username && loginForm.errors.username}
          />
          <TextField
            type="password"
            placeholder="password"
            name="password"
            fullWidth
            color="success"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            error={
              loginForm.touched.password &&
              loginForm.errors.password !== undefined
            }
            helperText={loginForm.touched.password && loginForm.errors.password}
          />
        </Stack>

        <Button type="submit" fullWidth sx={{ mt: 1, mb: 1 }}>
          login
        </Button>
      </Box>
      {isLogin && (
        <Box>
          <Typography color="#000">{`Username: ${username}`}</Typography>
          <Typography color="#000">{`Password: ${password}`}</Typography>
        </Box>
      )}
    </Box>
  );
}
