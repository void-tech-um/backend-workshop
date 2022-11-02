import * as React from "react";
import decode from "jwt-decode";
import { IAuthContext } from "./types";
import Api from "./api";
import { useLocation, Navigate } from "react-router-dom";

const api = new Api();
const AuthContext = React.createContext<IAuthContext>(null!);
export const useAuth = () => React.useContext(AuthContext);

const checkAuth = () => {
  const auth = useAuth();

  if (!auth.token) {
    return false;
  }

  try {
    const { exp } = decode(auth.token) as { exp: number };
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<string | null>(null);
  const [token, setToken] = React.useState<string | null>(null);

  const login = async (
    username: string,
    password: string,
    callback: VoidFunction
  ) => {
    try {
      const data = await api.login(username, password);
      setToken(data.token);
      setUser(data.loggedInUser.username);
      localStorage.setItem("token", data.token);
      callback();
    } catch (e) {
      alert(e);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, token } = useAuth();
  const location = useLocation();

  if (!user || !token || !checkAuth()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
