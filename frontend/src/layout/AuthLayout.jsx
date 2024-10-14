import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import FormSection from "../components/authentication/FormSection";
// import bgimg from "../images/14121199_5442673.jpg"
export default function AuthLayout() {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: 2 }, 
        // backgroundImage:`url(${bgimg})`,
        backgroundSize:'cover',
        backgroundPosition: "center",    
      }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={4}
        sx={{
          px: 4,
          py: 4,
          width: "100%",
          maxWidth: "500px",
          boxShadow: { xs: "none", md: "-1px 5px 5px 5px #00000040" },
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <FormSection />
      </Grid>
    </Grid>
  );
}
