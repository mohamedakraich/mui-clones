import React from "react";

import Box from "@mui/material/Box";
import { appContentWrapper } from "@/styles/youtube/styles";
import AppNavMenu from "@/components/youtube/navigation/AppNavMenu";
import AppThemeProvider from "@/themes/youtube/AppThemeProvider";
import { CssBaseline } from "@mui/material";

function YoutubePage() {
  return (
    <React.StrictMode>
      <CssBaseline />
      <AppThemeProvider>
        <Box sx={appContentWrapper}>
          <AppNavMenu />
        </Box>{" "}
      </AppThemeProvider>
    </React.StrictMode>
  );
}

export default YoutubePage;
