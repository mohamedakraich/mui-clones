import React from 'react';
import Box from '@mui/material/Box';
import { imageContentBox } from '@/styles/reddit/styles';
import { CoverImage } from '../../styled-components/CoverImage';

const ImageContent = ({ image }: { image: string }) => {
    return (
        <Box sx={imageContentBox}>
            <CoverImage imageUrl={image} imageHeight="300px" />
        </Box>
    );
};

export default ImageContent;
