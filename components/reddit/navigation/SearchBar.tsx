import React from 'react';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { searchBarInput, flexAlignCenter, searchBar } from '@/styles/reddit/styles';
import { Box } from '@mui/material';

export default function SearchBar() {
  const [search, setSearch] = React.useState('');

  return (
    <Box sx={flexAlignCenter}>
      <Paper component="form" sx={searchBar}>
        <IconButton type="button" sx={{ borderRadius: 0 }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          onChange={(e) => setSearch(e.target.value)}
          sx={searchBarInput}
          placeholder="Search"
        />
      </Paper>
    </Box>
  );
}
