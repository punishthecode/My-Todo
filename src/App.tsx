import React from "react";
import Box from "@mui/material/Box";

interface AppProps {
  greeting: string;
}

const App: React.FC<AppProps> = ({ greeting }) => {
  return <Box>{greeting}</Box>;
};

export default App;
