import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1d1d1d', color: '#e0e0e0', padding: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Rudra Prasad Nayak | Aspiring IT Professional | Built with{' '}
        <Link href="https://mui.com/" color="secondary" target="_blank" rel="noopener noreferrer">
          Material-UI
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;