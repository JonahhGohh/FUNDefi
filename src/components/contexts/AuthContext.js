import React, { useContext, useState, useEffect } from "react";
import {
  createAccount,
  signIn,
  onAuthStateChange,
  auth,
  signOut,
} from "../../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createAccount(email, password);
  }

  function signin(email, password) {
    return signIn(email, password);
  }

  function signout() {
    return signOut();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}
