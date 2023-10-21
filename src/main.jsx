import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { VerificationProvider } from "./Context/VerficationContext.jsx";
import { UserAuthProvider } from "./Context/Userauth.context.jsx";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthProvider>
      <VerificationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </VerificationProvider>
    </UserAuthProvider>
  </React.StrictMode>
);
