import React from "react";

import Box from "@mui/material/Box";
import { appContentWrapper } from "@/styles/youtube/styles";
import AppNavMenu from "@/components/youtube/navigation/AppNavMenu";
import AppThemeProvider from "@/themes/youtube/AppThemeProvider";
import { CssBaseline } from "@mui/material";
import AppContentArea from "@/components/youtube/AppContentArea";

function YoutubePage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <React.StrictMode>
      <CssBaseline />
      <AppThemeProvider>
        <Box sx={appContentWrapper}>
          <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
          <AppContentArea isOpen={mobileOpen} />
        </Box>
      </AppThemeProvider>
    </React.StrictMode>
  );
}

export default YoutubePage;
