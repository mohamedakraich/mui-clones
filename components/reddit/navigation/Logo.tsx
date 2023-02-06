import React from 'react';

import { Box, Typography } from '@mui/material';

import { BsReddit } from 'react-icons/bs';

import { flexAlignCenter, logoText } from '@/styles/reddit/styles';


const Logo = () => {
  return (
    <Box sx={flexAlignCenter}>
      <BsReddit size={32} />
      <Typography variant="h6" component="div" sx={logoText}>
        reddit
      </Typography>
    </Box>
  );
};

export default Logo;
