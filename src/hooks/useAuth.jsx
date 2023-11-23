import React, { createContext, useEffect, useState, useContext } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const defaultUserValue = {
  username: null,
  userId: null,
  isAuthenticated: false,
  id: null,
  type: null,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUserValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateUser = () => {
      const storedUser = Cookies.get("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        console.log(parsedUser);
      }
      setIsLoading(false);
    };
    updateUser()
  }, []);

  const onLogin = (username, userId, id, type) => {
    const newUser = { username, userId, isAuthenticated: true, id, type };
    setUser(newUser);
    Cookies.set("user", JSON.stringify(newUser), { expires: 7 });
  };

  const onLogout = () => {
    setUser(defaultUserValue);
    Cookies.remove("user");
  };

  const value = { user, onLogin, onLogout, isLoading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
