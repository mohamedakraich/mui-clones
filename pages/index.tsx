import React from 'react';

import Header from '@/components/Header'
import { Box, CssBaseline } from '@mui/material'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
        </Box>
      </Box>
    </React.Fragment>
  )
}
