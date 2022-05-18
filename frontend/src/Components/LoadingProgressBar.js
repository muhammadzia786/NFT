import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const LoadingProgressBar = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress size="2rem" style={{ color: "grey" }} />
    </Box>
  );
};

export default LoadingProgressBar;
