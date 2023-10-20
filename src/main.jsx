import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserAuthProvider } from "./Context/Userauth.context.jsx";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { awsmobile } from "./aws-exports";
import { VerificationProvider } from "./Context/VerficationContext.jsx";
Amplify.configure(awsmobile);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="1022264087161-mq37fd9botibajkj0pesm53m6ql7sjn2.apps.googleusercontent.com"> */}
    <UserAuthProvider>
      <VerificationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </VerificationProvider>
    </UserAuthProvider>
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);
