import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupAndLoginComp from "./Routes/Signupandlogin/SignupAndLoginComp";
import UserDetails from "./components/UserDetails/UserDetails";
import { useContext } from "react";
import { UserAuthcontext } from "./Context/Userauth.context";
import Verification from "./components/Verification/Verification";
import { Verificationcontext } from "./Context/VerficationContext";

function PrivateRoute({ element, condition, redirectPath }) {
  if (!condition) {
    return <Navigate to={redirectPath} />;
  }

  return element;
}

function App() {
  const { user } = useContext(UserAuthcontext);
  const { isSignUp } = useContext(Verificationcontext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignupAndLoginComp />} />
        <Route
          path="/userdetails"
          element={
            <PrivateRoute
              element={<UserDetails />}
              condition={user}
              redirectPath="/"
            />
          }
        />
        <Route
          path="/verification"
          element={
            <PrivateRoute
              element={<Verification />}
              condition={isSignUp}
              redirectPath="/"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
