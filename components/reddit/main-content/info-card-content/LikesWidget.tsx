import React from 'react';

import { Box, Typography } from '@mui/material';
import { CgChevronUpR, CgChevronDownR } from 'react-icons/cg';
import { likesWidget } from '@/styles/reddit/styles';

const LikesWidget = ({ likes }: { likes: number }) => {
    return (
        <Box sx={likesWidget}>
            <CgChevronUpR />
            <Box sx={{ my: 1 }}>
                <Typography>{likes}</Typography>
            </Box>
            <CgChevronDownR />
        </Box>
    );
};

export default LikesWidget;
