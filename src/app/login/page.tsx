import { Typography, Box, Button, Stack, TextField } from "@mui/material";

export default function LoginPage() {
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
      <Box component="form">
        <Stack spacing={3}>
          <TextField
            type="text"
            placeholder="username"
            name="username"
            fullWidth
            color="success"
          />
          <TextField
            type="password"
            placeholder="password"
            name="password"
            fullWidth
            color="success"
          />
        </Stack>

        <Button fullWidth sx={{ mt: 1, mb: 1 }}>
          login in
        </Button>
      </Box>
    </Box>
  );
}
