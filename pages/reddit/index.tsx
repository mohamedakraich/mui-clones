import React from 'react';

import { CssBaseline } from '@mui/material'

import AppThemeProvider from '@/themes/reddit/AppThemeProvider';

export default function Home() {
    return (
        <AppThemeProvider>
            <CssBaseline />
            <h1>Hello From Reddit Index Page</h1>
        </AppThemeProvider>
    )
}
