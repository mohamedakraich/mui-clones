import React from 'react';
import { Container } from '@mui/material';
import TrendingImages from './main-content/TrendingImages';
import PopularPosts from './main-content/PopularPosts';

const AppContentArea = () => {
    return (
        <Container maxWidth="lg">
            <TrendingImages />
            <PopularPosts />
        </Container>
    );
};

export default AppContentArea;
