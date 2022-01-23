import React, { useContext, useState, useEffect } from "react";
import { createAccount } from "../../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    createAccount(email, password).then((userCredential) => {
      setCurrentUser(userCredential.user);
    });
  }

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
