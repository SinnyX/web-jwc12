import * as React from "react";

import NavbarLayout from "../components/layouts/Navbar";
import Desktop from "../components/Desktop";
import Mobile from "../components/Mobile";

import Box from "@mui/material/Box";

export default function Index() {
  return (
    <div>
      <NavbarLayout />

      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <Mobile />
      </Box>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Desktop />
      </Box>
    </div>
  );
}
