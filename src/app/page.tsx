'use client'; 
import { Container, Typography } from '@mui/material';
import Button from './components/atoms/Button';
import Login from './Login';



export default function Home() {
  const handleClick = () => alert('Button clicked!');

  return (

<>
      {/* <Typography variant="h4" gutterBottom>
       create button
      </Typography>
      <Button label="Click Me" onClick={handleClick} /> */}
      <Login />
          <Container>
    </Container>
    </>
  );
}