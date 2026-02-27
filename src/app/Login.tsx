import React, { useState } from "react";

import {
  Box,
  Card,
  TextField,
  Typography,
  Button,
  Link,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import MicrosoftIcon from "@mui/icons-material/Windows";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ThemeRegistry from "./ThemeRegistry";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #000428 0%, #004e92 60%, #2bb0ed 100%)",
        position: "relative",
      }}
    >
      <Card
        sx={{
          width: 420,
          p: 4,
          borderRadius: 3,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center" mb={2}>
          <Box
            sx={{
              width: 28,
              height: 28,
              bgcolor: "#5b6ef5",
              borderRadius: 1,
              mr: 1,
            }}
          />
          <Typography fontWeight={600}>logoipsum</Typography>
        </Box>

        {/* Title */}
        <Typography variant="h5" fontWeight={600} mb={1}>
          Login
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Enter your username and password to continue
        </Typography>

        {/* Username */}
        <Typography variant="body2" mb={1}>
          Username
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter your username"
          size="small"
          sx={{ mb: 2 }}
        />

        {/* Password */}
        <Typography variant="body2" mb={1}>
          Password
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          size="small"
          sx={{ mb: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box textAlign="right" mb={2}>
          <Link href="#" underline="hover" fontSize={14}>
            Forgot Password?
          </Link>
        </Box>

        {/* Continue Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.2,
            mb: 3,
            backgroundColor: "#7a86d6",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#6a76c6",
            },
          }}
        >
          Continue
        </Button>

        <Divider sx={{ mb: 2 }}>or continue with</Divider>

        {/* Social Login */}
        <Box display="flex" gap={2}>
          <Button
            fullWidth
            variant="outlined"
            // startIcon={<MicrosoftIcon />}
            sx={{ textTransform: "none" }}
          >
            Microsoft
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<PhoneIphoneIcon />}
            sx={{ textTransform: "none" }}
          >
            Mobile Number
          </Button>
        </Box>

        {/* Register */}
        <Typography textAlign="center" mt={3} fontSize={14}>
          New to Yesbuddy?{" "}
          <Link href="#" underline="hover">
            Register Now
          </Link>
        </Typography>
      </Card>

      {/* Footer */}
      <Typography
        position="absolute"
        bottom={20}
        fontSize={13}
        color="white"
        sx={{ opacity: 0.8 }}
      >
        Copyright © yesbuddy.com All rights reserved.
      </Typography>
    </Box>
  );
};

export default Login;