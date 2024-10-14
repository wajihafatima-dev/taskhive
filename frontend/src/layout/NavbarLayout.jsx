import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/global/Navbar";

export const NavbarLayout = ({ onNavOpen }) => {
  return (
    <>
      <Box
        component="header"
        sx={{
          height: "auto",
          position: "sticky",
          left: {
            md: `${280}px`,
          },
          top: 0,
          width: {
            md: `calc(100% - ${280}px)`,
          },
          zIndex: 500,
          backgroundColor:'red',
        }}
      >
        <Navbar open={onNavOpen} />
      </Box>
    </>
  );
};
