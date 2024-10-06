// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OAuthLoginButton from "./components/OAuthLoginButton";
import OAuthCallback from "./components/OAuthCallback";

function App() {
  return (
    <Router>
      <div className="App max-w-xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<OAuthLoginButton />} />
          <Route path="/oauth2callback" element={<OAuthCallback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
