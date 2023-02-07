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
import CustomButton from '../shared/CustomButton';
import UserProfile from './UserProfile';
import MobileNav from './MobileNav';


const Navbar = () => {
    return (
        <AppBar component="nav" sx={appBar}>
            <Toolbar sx={appToolBarWrapper}>
                <Box sx={toolbarWrapper}>
                    <Box sx={logoWrapper}>
                        <Logo />
                        <Box sx={mobileNavWrapper}>
                            <MobileNav />
                        </Box>
                    </Box>
                    <Box>
                        <SearchBar />
                    </Box>
                    <Box sx={flex}>
                        <Box sx={loginBtnWrapper}>
                            <CustomButton
                                text="Get App"
                                bgColor="background.customBtn"
                                color="text.btnText"
                                space
                            />
                            <CustomButton
                                text="Login"
                                bgColor="background.customBtn2"
                                color="text.btnText"
                                space
                            />
                        </Box>
                        <UserProfile />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;
