'use client';  

import { Button } from '@mui/material';

interface MyButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary';
}

export default function MyButton({ label, onClick, color = 'primary' }: MyButtonProps) {
  return (
    <Button variant="outlined" color={color} onClick={onClick}>
      {label}
    </Button>
  );
}