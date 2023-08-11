import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";
import auth0Config from "./auth0-config";
import Spinner from "./components/Spinner";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Auth0Provider
        domain={auth0Config.domain}
        clientId={auth0Config.clientId}
        authorizationParams={{
          redirect_uri: auth0Config.redirect_uri,
        }}
      >
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>
);
