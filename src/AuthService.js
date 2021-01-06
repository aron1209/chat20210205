import React, { useState, useEffect } from "react";
import { auth } from "./config/firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  //userにはログイン済みのユーザーのオブジェクトが入ることになる
  const [user, setUser] = useState(null);

  useEffect(() => {
    //onAuthStateChanged:ユーザーのログイン時、ログアウト時に必ず呼び出されるメソッド
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []); //

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
