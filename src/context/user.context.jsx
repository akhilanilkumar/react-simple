import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../util/firebase.utils";

//  Actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  //   signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      console.dir(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      return unsubscribe;
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
