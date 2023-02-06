import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';

import {
    appBar,
    toolbarWrapper,
    appToolBarWrapper,
    flex,
    loginBtnWrapper,
    mobileNavWrapper,
    logoWrapper,
} from '@/styles/reddit/styles';


const Navbar = () => {
    return (
        <AppBar component="nav" sx={appBar}>
            <Toolbar sx={appToolBarWrapper}>
                <Box sx={toolbarWrapper}>
                    <Box sx={logoWrapper}>
                        <Box sx={mobileNavWrapper}>
                        </Box>
                    </Box>
                    <Box>
                    </Box>
                    <Box sx={flex}>
                        <Box sx={loginBtnWrapper}>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
