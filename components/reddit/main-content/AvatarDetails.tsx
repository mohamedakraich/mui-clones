import React from 'react';

import { Box, Typography } from '@mui/material';

import { avatarWrapper, flex } from '@/styles/reddit/styles';

interface AvatarDetailsProps {
    icon: JSX.Element;
    user: string;
}

const AvatarDetails = ({ icon, user }: AvatarDetailsProps) => {
    return (
        <React.Fragment>
            <Box sx={avatarWrapper}>
                <Box component="span" sx={{ mr: 1, ...flex }}>
                    {icon}
                </Box>
                <Typography variant="caption"> {user}</Typography>
            </Box>
        </React.Fragment>
    );
};

export default AvatarDetails;

