import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      auth.login(username, password, () => {
        console.log("Logged in");
        navigate(from, { replace: true });
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form-control"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  );
};

export default Login;
