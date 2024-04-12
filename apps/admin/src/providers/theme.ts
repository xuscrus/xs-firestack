import { radiantDarkTheme } from "react-admin";
import { Theme } from '@mui/material';
import { applyOverrides } from "./componentOverrides";


applyOverrides()

export const theme: Theme = {
  ...radiantDarkTheme,
  typography: {
    ...radiantDarkTheme.typography,
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`
  },
  components: {
    ...radiantDarkTheme.components,
    MuiPaper: {}
  }
};
