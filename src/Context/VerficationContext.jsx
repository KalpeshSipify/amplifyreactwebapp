import { createContext, useState } from "react";

export const Verificationcontext = createContext({
  isSignUp: false,
  setisSignUp: () => {},
});

// eslint-disable-next-line react/prop-types
export const VerificationProvider = ({ children }) => {
  const [isSignUp, setisSignUp] = useState(false);

  const value = {
    isSignUp,
    setisSignUp,
  };

  return (
    <Verificationcontext.Provider value={value}>
      {children}
    </Verificationcontext.Provider>
  );
};
