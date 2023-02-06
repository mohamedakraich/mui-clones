import React from 'react';

import { Box, CssBaseline } from '@mui/material'

import { appWrapper, contentWrapper, createAccountWrapper, joinRedditWrapper, scrollListWrapper, sideBarWrapper } from '@/styles/reddit/styles';

import AppThemeProvider from '@/themes/reddit/AppThemeProvider';
import Navbar from '@/components/reddit/navigation/NavBar';

export default function Home() {
    return (
        <AppThemeProvider>
            <CssBaseline />
            <Box sx={appWrapper}>
                <Navbar />
                <Box sx={contentWrapper}>
                    <Box sx={sideBarWrapper}>
                        <Box sx={scrollListWrapper}>
                        </Box>
                        <Box sx={createAccountWrapper}>
                            <Box sx={joinRedditWrapper}>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AppThemeProvider>
    )
}
