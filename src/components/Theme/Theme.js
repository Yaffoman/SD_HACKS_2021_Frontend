import React from 'react';
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: amber[300]
    }
  },
})

export default function Theme({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}