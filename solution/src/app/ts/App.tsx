import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Market from "./components/Market";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./utils/auth";
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<RequireAuth>{<Market />}</RequireAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
