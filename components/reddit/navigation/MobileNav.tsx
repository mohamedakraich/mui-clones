import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { AiOutlineHome } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import {
    mobileBtnWrapper,
    positionRelative,
    positionAbsolute,
    flexGrow,
} from '@/styles/reddit/styles';
import SideList from '../SideList';

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen((v) => !v);
    };
    return (
        <React.Fragment>
            <Box sx={positionRelative}>
                <Button
                    onClick={toggle}
                    sx={mobileBtnWrapper}
                    startIcon={<AiOutlineHome />}
                >
                    <Typography sx={{ mr: 1 }}>Home</Typography>
                    <Box sx={flexGrow}></Box>
                    <BiChevronDown size={24} />
                </Button>
                <Box sx={positionAbsolute}>{open && <SideList />}</Box>
            </Box>
        </React.Fragment>
    );
};

export default MobileNav;
