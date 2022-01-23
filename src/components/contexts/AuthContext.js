import React, { useContext, useState, useEffect } from "react";
import { createAccount, onAuthStateChange, auth } from "../../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    createAccount(email, password).then((userCredential) => {
      setCurrentUser(userCredential.user);
    });
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
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}
