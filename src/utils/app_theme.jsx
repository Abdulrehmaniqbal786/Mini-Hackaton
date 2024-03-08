import { createTheme } from "@mui/material/styles";
import tailwind_theme from "../../tailwind.config";

const { colors } = tailwind_theme.theme.extend;

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
});

export { theme };
