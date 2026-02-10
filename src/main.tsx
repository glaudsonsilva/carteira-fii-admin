import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppRoutes } from "./routes/AppRoutes";
import React from "react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
