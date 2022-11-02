import * as React from "react";
import { useAuth, checkAuth } from "../utils/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const auth = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      auth.signup(username, email, password, () => {
        navigate(from, { replace: true });
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <header className="card-header">
              <h4 className="card-title mt-2">Sign up</h4>
            </header>
            <article className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Create password</label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm password</label>
                  <input
                    className="form-control"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  >
                    {" "}
                    Register{" "}
                  </button>
                  <Link to="/login" className="mx-4">
                    {" "}
                    Already have an account?{" "}
                  </Link>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
