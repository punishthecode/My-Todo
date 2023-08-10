import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import React, { Suspense } from "react";
import LoginNotice from "./components/LoginNotice";
import Todos from "./components/Todos";
import Spinner from "./components/Spinner";

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
        <Suspense fallback={<Spinner />}>
          <Box marginLeft="10%" mt={4}>
            <Todos />
          </Box>
        </Suspense>
      ) : (
        <Box display="flex" justifyContent="center" mt={4}>
          <LoginNotice />
        </Box>
      )}
    </Container>
  );
};

export default App;
