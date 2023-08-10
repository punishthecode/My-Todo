import { Box, Typography } from "@mui/material";

const LoginNotice: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Login to view your todos!
      </Typography>
    </Box>
  );
};

export default LoginNotice;
