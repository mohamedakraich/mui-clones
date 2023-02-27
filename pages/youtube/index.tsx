import React from "react";

import Box from "@mui/material/Box";
import { appContentWrapper } from "@/styles/youtube/styles";
import AppNavMenu from "@/components/youtube/navigation/AppNavMenu";

function YoutubePage() {
  return (
    <Box sx={appContentWrapper}>
      <AppNavMenu />
    </Box>
  );
}

export default YoutubePage;
