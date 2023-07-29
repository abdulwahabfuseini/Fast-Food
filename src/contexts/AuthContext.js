import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  //   ====== Login ======
  function login(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  
  //   ====== logout ======
  function logout() {
    return signOut(auth);
  }

  //   ======= ResetPassword ======
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
