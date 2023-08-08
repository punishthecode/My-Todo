import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const customStyle = {
  paddingTop: "15px",
  paddingBottom: "15px",
};

const buttonStyle = {
  background: "#221faf",
};
const gradientBackground = {
  background: "linear-gradient(45deg, #221faf 30%, #000000 90%)",
};

const customNavbarStyle = {
  display: "flex",
};

const Navbar: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={3}
      bgcolor="primary.main"
      color="white"
      sx={gradientBackground}
    >
      <Typography variant="h6">To-do</Typography>
      <Box style={customStyle}>
        {isAuthenticated ? (
          <Box sx={customNavbarStyle}>
            <Typography paddingRight="10px" variant="h6">
              Welcome, you are logged in!
            </Typography>
            <Button
              style={buttonStyle}
              variant="contained"
              color="secondary"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Button
            style={buttonStyle}
            variant="contained"
            color="secondary"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
