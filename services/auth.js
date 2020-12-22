import {useState, useEffect, useContext, createContext} from "react";

import firebaseClient from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  firebaseClient()

  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged( async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return
      }
      const token = await user.getIdToken();
      nookies.set(undefined, "token", token, {});
    })
  }, []);
  return (<AuthContext.Provider value = {{user}}>{children}</AuthContext.Provider>)
}
export const useAuth = () => useContext(AuthContext);