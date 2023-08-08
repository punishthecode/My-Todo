import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginNotice from "./components/LoginNotice";
import Todos from "./components/Todos";

const customContainerStyles = {
  padding: "0px",
  "@media (min-width: 600px)": {
    padding: "0px",
    marginLeft: "0px",
    marginRight: "0px",
    maxWidth: "100%",
  },
};

const App: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Container sx={customContainerStyles}>
      <Navbar />
      {isAuthenticated ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <Todos />
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" mt={4}>
          <LoginNotice />
        </Box>
      )}
    </Container>
  );
};

export default App;
