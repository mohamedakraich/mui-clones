import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import {
    postInfoContentWrapper,
    postInfoLayoutWrapper,
    postInfoHeader,
    flexGrow,
    postInfoDesc,
    postInfoSubHeader,
} from '@/styles/reddit/styles';

interface PostInfoContentProps {
    id: number;
    likes: string;
    icon: JSX.Element;
    user: string;
    postedBy: string;
    timeAgo: string;
    desc: string;
    image: string;
    comments: string;
    youtubeId?: undefined;
    linkUrl?: undefined;
}

const PostInfoContent = ({ item }: { item: PostInfoContentProps }) => {
    return (
        <Box sx={postInfoContentWrapper}>
            <Box sx={postInfoLayoutWrapper}>
                <Typography sx={postInfoHeader}>
                    {item.icon} {item.user}
                </Typography>
                <Typography sx={postInfoDesc}>Posted by {item.postedBy}</Typography>
                <Typography sx={postInfoSubHeader}>{item.timeAgo} hours ago</Typography>
            </Box>
            <Box sx={flexGrow}></Box>
            <Chip sx={{ px: 1 }} label="Join" color="primary" />
        </Box>
    );
};

export default PostInfoContent;
