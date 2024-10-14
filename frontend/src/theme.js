"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    main_color: {
      main: "#673ab7",
      light: "#7e5be7",
      dark: "#42239D",
    },
    light_color: {
      main: "#E2E8F0",
    },
    links_color: {
      main: "#4079ED",
      light: "#737791",
      dark: "#64748B",
    },
    background: {
      default: "#fff",
      dark: "#F1F5F9",
      black: "black",
    },
    heading:{
      main:'#0F172A'
    }
  },
});

export default theme;
