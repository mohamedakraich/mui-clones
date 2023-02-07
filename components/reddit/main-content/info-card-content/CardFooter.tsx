import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { cardFooterWrapper, cardFooterText } from '@/styles/reddit/styles';
import { cardFooterItems } from '@/data/reddit/app.data';

const CardFooter = ({ comments = 0 }) => {
    return (
        <Box sx={cardFooterWrapper}>
            {cardFooterItems.map((item) => {
                return (
                    <Button key={item.id}>
                        <Typography sx={cardFooterText}>
                            {item.icon}
                            <Box sx={{ ml: 1 }}>
                                {item.comments && comments} {item.text}
                            </Box>
                        </Typography>
                    </Button>
                );
            })}
        </Box>
    );
};

export default CardFooter;

{/* <Box as="span" sx={{ ml: 1 }}> */ }
