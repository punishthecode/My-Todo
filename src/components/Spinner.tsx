import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Spinner: React.FC = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
};

export default Spinner;
