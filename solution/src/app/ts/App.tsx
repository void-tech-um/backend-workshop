import React from "react";
import Login from "./components/Login";
import Market from "./components/Market";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RequireAuth>{<Market />}</RequireAuth>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
