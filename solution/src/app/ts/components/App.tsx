import React from "react";
import Login from "./Login";
import Register from "./Register";
import Market from "./Market";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth, AuthRedirect } from "../utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFound = () => (
  <div>
    <h1
      style={{
        textAlign: "center",
        marginTop: "50px",
        color: "blue",
      }}
    >
      404 - Not Found!
    </h1>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/login"
          element={<AuthRedirect>{<Login />}</AuthRedirect>}
        />
        <Route
          path="/signup"
          element={<AuthRedirect>{<Register />}</AuthRedirect>}
        />
        <Route path="/" element={<RequireAuth>{<Market />}</RequireAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
