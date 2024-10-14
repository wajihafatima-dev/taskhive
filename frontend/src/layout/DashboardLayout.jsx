import React from "react";
import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
// import { NavbarLayout } from "./NavbarLayout";
const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 0,
  },
}));
const LayoutBodyRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  overflowX: "hidden",
  margin: "auto",
  [theme.breakpoints.up("md")]: {
    paddingLeft: 280,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
  [theme.breakpoints.up("xl")]: {
    paddingLeft: 300,
  },
}));
const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

const DashboardLayout = () => {
  const [openNav, setOpenNav] = useState(true);

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(() => {
    handlePathnameChange();
  },);

  return (
    <>
      {/* <NavbarLayout onNavOpen={() => setOpenNav(true)} /> */}
      <LayoutRoot>
        <LayoutBodyRoot>
          <LayoutContainer>
            <Box
              sx={{
               
                px: { xs: 2, sm: 2, md: 3 },
                py: { xs: 2, sm: 2.5, md: 3, lg: 5 },
              }}
            >
              <Outlet />
            </Box>
          </LayoutContainer>
        </LayoutBodyRoot>
      </LayoutRoot>
    </>
  );
};

export default DashboardLayout;