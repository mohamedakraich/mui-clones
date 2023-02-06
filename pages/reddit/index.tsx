import React from 'react';

import { Box, CssBaseline, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors';

import { appWrapper, contentWrapper, createAccountWrapper, joinRedditWrapper, scrollListWrapper, sideBarWrapper } from '@/styles/reddit/styles';

import AppThemeProvider from '@/themes/reddit/AppThemeProvider';
import Navbar from '@/components/reddit/navigation/NavBar';
import SideList from '@/components/reddit/SideList';
import CustomButton from '@/components/reddit/shared/CustomButton';

export default function Home() {
    return (
        <AppThemeProvider>
            <CssBaseline />
            <Box sx={appWrapper}>
                <Navbar />
                <Box sx={contentWrapper}>
                    <Box sx={sideBarWrapper}>
                        <Box sx={scrollListWrapper}>
                            <SideList />
                        </Box>
                        <Box sx={createAccountWrapper}>
                            <Box sx={joinRedditWrapper}>
                                <Typography sx={{ mb: 2 }} variant="body2" gutterBottom>
                                    Create an account to follow your favorite communities and
                                    start taking part in conversations.
                                </Typography>
                                <CustomButton
                                    bgColor={blue[300]}
                                    color={grey[900]}
                                    text="Join Reddit"
                                    fullWidth
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AppThemeProvider>
    )
}
