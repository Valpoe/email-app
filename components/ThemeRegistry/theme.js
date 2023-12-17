import { createTheme } from '@mui/material/styles';
import '@fontsource/nunito-sans';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1769aa',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans',
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
