import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { getProfile } from "../api/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getProfile(token).then((data) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
