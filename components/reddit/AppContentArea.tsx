import React from 'react';
import { Container } from '@mui/material';
import TrendingImages from './main-content/TrendingImages';

const AppContentArea = () => {
    return (
        <Container maxWidth="lg">
            <TrendingImages />
        </Container>
    );
};

export default AppContentArea;
