import React from 'react';
import { Box, Typography } from '@mui/material';
import { trendimgImageContent, trendingImageHeader } from '@/styles/reddit/styles';
import { imageCardsItems } from '@/data/reddit/app.data';
import { CoverImage } from '../styled-components/CoverImage';
import AvatarDetails from './AvatarDetails';

const TrendingImages = () => {
    return (
        <React.Fragment>
            <Typography sx={trendingImageHeader} variant="h6">
                Trending Today
            </Typography>
            <div className="imageBoxWrapper">
                {imageCardsItems.map((item) => {
                    return (
                        <Box key={item.id} className={`imageBox box${item.id}`}>
                            <CoverImage imageUrl={item.imageUrl} imageHeight="200px" />
                            <Box sx={trendimgImageContent}>
                                <Typography variant="subtitle2"> {item.header}</Typography>
                                <Typography variant="subtitle2">{item.subHeader}</Typography>
                                <AvatarDetails icon={item.icon} user={item.user} />
                            </Box>
                        </Box>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default TrendingImages;
