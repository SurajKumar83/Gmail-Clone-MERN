// Wehave used it show something to the user while loading any components

import { Box, Typography } from "@mui/material";
// useRouteError is used to catch the error
import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Box style={{ marginLeft: 250 }}>
      <Typography>Hello User,Wait for a moment...!</Typography>
    </Box>
  );
};
export default ErrorComponent;
