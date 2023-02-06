import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';


const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: 'none',
      fontSize: 15,
    },
  },
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 1,
        },
        variant: 'subtitle2',
        textTransform: 'capitalize',
      },
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1,
        },
        spacing: 2,
        direction: 'row',
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.primary.main,
        },
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
        // p: 0,
        disableRipple: true,
      },
      //variant: 'text',
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};

export default AppThemeProvider;