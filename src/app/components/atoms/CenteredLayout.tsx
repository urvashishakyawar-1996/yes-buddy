import { Box } from "@mui/material";
import React from "react";

interface CenteredLayoutProps {
  children: React.ReactNode;
  minHeight?: string;
  background?: string;
  position?: "relative" | "absolute" | "fixed";
  center?: boolean;
}

export default function CenteredLayout({
  children,
  minHeight = "100vh",
  background = "linear-gradient(135deg, #000428 0%, #004e92 60%, #2bb0ed 100%)",
  position = "relative",
  center = true,
}: CenteredLayoutProps) {
  return (
    <Box
      sx={{
        minHeight,
        display: center ? "flex" : "block",
        alignItems: center ? "center" : undefined,
        justifyContent: center ? "center" : undefined,
        background,
        position,
      }}
    >
      {children}
    </Box>
  );
}