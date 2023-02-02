import React from 'react';

import Header from '@/components/Header'
import { Box, Container, CssBaseline } from '@mui/material'

import OptionsTab from '@/components/OptionsTab';
import LocationCards from '@/components/LocationCards';

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
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  )
}
