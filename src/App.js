import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Privacy from "./pages/Settings/Privacy/Privacy";
import Notifications from "./pages/Settings/Notifications/Notifications";
import Account from "./pages/Settings/Account/Account";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/settings" element={<Settings />}>
          <Route path="privacy" element={<Privacy />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
