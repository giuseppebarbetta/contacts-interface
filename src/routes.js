import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Contacts from "./containers/Contacts";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
