import React from 'react';

import Header from '@/components/airbnb/Header'
import { Box, Container, CssBaseline } from '@mui/material'

import OptionsTab from '@/components/airbnb/OptionsTab';
import LocationCards from '@/components/airbnb/LocationCards';
import Footer from '@/components/airbnb/Footer';
import FooterMenu from '@/components/airbnb/FooterMenu';
import MobileFooter from '@/components/airbnb/MobileFooter';

import { displayOnDesktop } from '@/themes/airbnb/commonStyles';
import AppThemeProvider from '@/themes/airbnb/AppThemeProvider';

export default function Home() {
  return (
    <AppThemeProvider>
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
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </AppThemeProvider>
  )
}
