import * as React from "react";
import decode from "jwt-decode";
import { IAuthContext } from "./types";
import Api from "./api";
import { useLocation, Navigate } from "react-router-dom";

const api = new Api();
const AuthContext = React.createContext<IAuthContext>(null!);
export const useAuth = () => React.useContext(AuthContext);

const checkAuth = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  try {
    const { exp } = decode(token) as { exp: number };
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

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { user }: any = decode(token);
      setUser(user.username);
    }
  }, []);

  const login = async (
    username: string,
    password: string,
    redirect: VoidFunction
  ) => {
    try {
      const data = await api.login(username, password);
      setUser(data.loggedInUser.username);
      localStorage.setItem("token", data.token);
      redirect();
    } catch (e) {
      alert(e);
    }
  };

  const signup = async (
    username: string,
    email: string,
    password: string,
    redirect: VoidFunction
  ) => {
    try {
      const data = await api.signup(username, email, password);
      alert("Signup successful!");
      redirect();
    } catch (e) {
      alert(e);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!checkAuth() || !auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export const AuthRedirect = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (checkAuth() && auth.user) {
    return <Navigate to="/" />;
  }

  return children;
};
