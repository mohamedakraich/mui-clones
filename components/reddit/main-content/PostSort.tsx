import React from 'react';

import { Button, Card, CardContent } from '@mui/material';
import { Box } from '@mui/material';
import { SiHotjar } from 'react-icons/si';
import { MdOutlineNewReleases } from 'react-icons/md';
import { BiChevronsUp } from 'react-icons/bi';
import {
    cardContentWrapper,
    postSortLayoutWrapper,
    postSortBtn1,
    postSortBtn2,
    flexGrow,
} from '@/styles/reddit/styles';
import SelectMore from './SelectMore';
import SwitchLayout from './SwitchLayout';
import CountrySelect from './CountrySelect';

const PostSort = () => {
    return (
        <Card>
            <CardContent sx={cardContentWrapper}>
                <Box sx={postSortLayoutWrapper}>
                    <Button sx={postSortBtn1} variant="outlined" startIcon={<SiHotjar />}>
                        Hot
                    </Button>
                    <CountrySelect />
                    <Button
                        sx={postSortBtn2}
                        variant="outlined"
                        startIcon={<MdOutlineNewReleases />}
                    >
                        New
                    </Button>
                    <Button
                        sx={postSortBtn2}
                        variant="outlined"
                        startIcon={<BiChevronsUp />}
                    >
                        Top
                    </Button>
                    <SelectMore />
                    <Box sx={flexGrow}></Box>
                    <SwitchLayout />
                </Box>
            </CardContent>
        </Card>
    );
};

export default PostSort;
