import React from "react";
import { Box, Typography } from "@mui/material";

const DateComponent: React.FC = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;
  return (
    <Box>
      <Typography>{formattedDate}'s tasks</Typography>
    </Box>
  );
};

export default DateComponent;
