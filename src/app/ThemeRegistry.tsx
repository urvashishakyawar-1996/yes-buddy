'use client';

import * as React from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    mode: 'light', 
    primary: { main: '#1976d2' },  
    secondary: { main: '#9c27b0' }, 
    error: { main: '#d32f2f' }, 
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), sans-serif',
    h4: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
            sx: {
        backgroundColor: '#3a51de',
        }
      },
      styleOverrides: {
        root: {
          borderRadius: 8, 
          textTransform: 'none', 
          padding: '4px 12px',
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: '#333',
            color: '#333',
              backgroundColor: 'transparent!important',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.04)',
              borderColor: '#333',
            },
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "#3a51de",
          textDecoration: "none",
          "&:hover": {
            color: "#3a51de",
            textDecoration: "underline",
          },
        },
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