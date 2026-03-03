'use client';

import * as React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Margin } from '@mui/icons-material';

const customVars = {
  fontSizes: {
    xxs: "12px",
    xs: "13px",
    sm: "14px",
    base: "16px",
    md: "18px",
    lg: "24px",
    xl: "40px",
    xxl: "48px",
    font32: "32px",
    font28:"28px",
 },
  background: {
    whitebg: "#ffffff",
    bluex: "#3B52DE",
    grey5B6064: "#5B6064",
    
    
  },
};
const theme = createTheme({
   typography: {
    fontFamily: "var(--font-inter), sans-serif",
    
     h3: { color: "#272E35", fontSize:"24px" },
    h4: { color: "#272E35" },
     body1: {
      fontSize: "16px",      
      lineHeight: "20px",    
      color: "#5B6064",      
    },
    body2: {
      fontSize: "14px",      
      lineHeight: "20px",    
      color: "#41474D",      
    },
    
  },
  components: {
    
MuiButton: {
  defaultProps: {
    variant: 'contained',
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: 8,
      textTransform: 'none',
     padding: '1.2rem 12px',
      backgroundColor: '#7a86d6', 
         height:"44px", 
         fontWeight:"600",
      '&:hover': {
        backgroundColor: '#6a76c6', 
      },
    },
  },
  variants: [
    {
      props: { variant: 'outlined' },
      style: {
        borderColor: 'transparent',
        color: '#333',
        backgroundColor: '#f2f2f2',
        height:"44px",
        fontWeight:"600",
        '&:hover': {
       backgroundColor: '#f2f2f2',
          borderColor: 'transparent',
        },
      },
    },
  ],
},
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: "#3a51de",
          textDecoration: "none",
          "&:hover": {
            color: "#3a51de",
            textDecoration: "underline",
          },
        },
      },
    },
    
   MuiOutlinedInput: {
  styleOverrides: {
    root: {
      height: "44px",
      borderRadius: "8px",
      color: "#5B6064",
      "& fieldset": {
        borderColor: "#B2B4B6",
      },
      "&:hover fieldset": {
        borderColor: "#B2B4B6",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#B2B4B6",
      },
    },
    input: {
      height: "44px",
      padding: "0 14px",
      "&::placeholder": {
        fontSize: "14px",
        color: "#5B6064", 
        opacity: 1, 
      },
    },
  },
},
MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: "12px",
        color: "#5B6064",
        fontWeight:"400",
        "&.Mui-focused": {
          color: "#5B6064",
        },
      },
    },
  },
MuiCard: {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: "32px",
      borderRadius: "12px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      width: "480px",     
      maxWidth: "100%",   
      fontWeight: "400",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0 15px",   
      },
    }),
  },
},
  },
});

interface ThemeRegistryProps {
  children: React.ReactNode;
  cache?: EmotionCache;
}

const clientSideEmotionCache = createCache({ key: 'mui', prepend: true });

export default function ThemeRegistry({
  children,
  cache = clientSideEmotionCache,
}: ThemeRegistryProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}