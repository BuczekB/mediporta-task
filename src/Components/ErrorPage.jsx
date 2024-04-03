import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ErrorPage() {
  return (
    <Box sx={{ display: 'flex', width : '100%' , height: '100vh', background: '#FFFDD7', zIndex: '10', justifyContent: 'center', alignItems:'center' }}>
        <Typography sx={{  color: '#E72929', fontSize: 'bold' }} variant="h1" gutterBottom>
        Error: Try again later
      </Typography>
    </Box>
  )
}

export default ErrorPage