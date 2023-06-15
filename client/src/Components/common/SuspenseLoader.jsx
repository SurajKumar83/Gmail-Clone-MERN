import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
const SuspenseLoader = () => {
  return (
    <Box>
      <CircularProgress />
      <Typography>loading..</Typography>
    </Box>
  );
};

export default SuspenseLoader;
