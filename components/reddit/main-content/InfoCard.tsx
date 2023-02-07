import React from 'react';
import { Box, Typography } from '@mui/material';
import {
    infoCardWrapper,
    infoCardLayout,
    infoCardHeader,
} from '@/styles/reddit/styles';
import LikesWidget from './info-card-content/LikesWidget';
import PostInfoContent from './info-card-content/PostInfoContent';
import VideoContent from './info-card-content/VideoContent';
import ImageContent from './info-card-content/ImageContent';
import LinkContent from './info-card-content/LinkContent';
import CardFooter from './info-card-content/CardFooter';
import { PostInfoContentProps } from '@/data/reddit/app.data';

const InfoCard = ({ item }: { item: PostInfoContentProps }) => {
    return (
        <Box sx={infoCardWrapper}>
            <LikesWidget likes={item.likes} />
            <Box sx={infoCardLayout}>
                <PostInfoContent item={item} />
                <Typography sx={infoCardHeader} variant="h6">
                    {item.desc}
                </Typography>
                {item.youtubeId && <VideoContent id={item.youtubeId} />}
                {item.image && <ImageContent image={item.image} />}
                {item.linkUrl && <LinkContent text={item.linkUrl} />}
                {item.comments && <CardFooter comments={item.comments} />}
            </Box>
        </Box>
    );
};

export default InfoCard;
