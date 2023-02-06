import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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

import Logo from './Logo';
import SearchBar from './SearchBar';


const Navbar = () => {
    return (
        <AppBar component="nav" sx={appBar}>
            <Toolbar sx={appToolBarWrapper}>
                <Box sx={toolbarWrapper}>
                    <Box sx={logoWrapper}>
                        <Logo />
                        <Box sx={mobileNavWrapper}>
                        </Box>
                    </Box>
                    <Box>
                        <SearchBar/>
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
