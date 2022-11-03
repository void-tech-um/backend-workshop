import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        navigate(from, { replace: true });
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form
      style={{ width: "30%" }}
      onSubmit={handleSubmit}
      className="login-form mx-auto mt-5"
    >
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
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
      <Link to="/signup" className="btn btn-link">
        Sign up
      </Link>
    </form>
  );
};

export default Login;
