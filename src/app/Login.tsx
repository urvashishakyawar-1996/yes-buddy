'use client';
import React, { useEffect, useState } from "react";
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
import CenteredLayout from "./components/atoms/CenteredLayout";
import { Eye, EyeOff, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  return (
    <CenteredLayout position="relative">
      <Card>
        {/* Logo */}
        <Box display="flex" alignItems="center" mb={3} gap={1}>
          <Image
            src="/images/exclude.svg" 
            alt="Logo"
            width={32}
            height={32}
          />
          <Typography variant="h3" fontWeight={600}>
            logoipsum
          </Typography>
        </Box>

        <Typography variant="h3" fontWeight={600} mb={1}>
          Login
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Enter your username and password to continue
        </Typography>

        <Typography variant="body2" mb={1}>
          Username
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter your username"
          size="small"
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" mb={1}>
          Password
        </Typography>

        {mounted && ( 
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
                    {showPassword ? (
                      <EyeOff size={20} color="#2f3a46" />
                    ) : (
                      <Eye size={20} color="#2f3a46" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}

        <Box textAlign="right" mb={2}>
          <Link href="#" underline="hover" fontSize={14}>
            Forgot Password?
          </Link>
        </Box>

        <Button
          fullWidth
          variant="contained"
          disableRipple
          sx={{
            mb: 2,
          }}
        >
          Continue
        </Button>

        <Typography variant="body2" sx={{ mb: 3, textAlign: 'center' }}>
          or continue with
        </Typography>

        <Box display="flex" gap={2}>
          <Button
            fullWidth
            variant="outlined"
            disableRipple
            
          >
             <Image
            src="/images/Microsoft_logo.svg" 
            alt="Logo"
            width={20}
            height={20}
            style={{ marginRight: "10px" }}
          />
            Microsoft
          </Button>

          <Button
            fullWidth
            variant="outlined"
            disableRipple
            startIcon={<Smartphone size={18} />}
          >
            Mobile Number
          </Button>
        </Box>

        <Typography textAlign="center" mt={3} fontSize={14}>
          New to Yesbuddy?{" "}
          <Link href="#" underline="hover">
            Register Now
          </Link>
        </Typography>
      </Card>

      <Typography
        position="absolute"
        bottom={20}
        width="100%"
        textAlign="center"
        color="white"
  
      >
        Copyright © yesbuddy.com All rights reserved.
      </Typography>
    </CenteredLayout>
  );
};

export default Login;