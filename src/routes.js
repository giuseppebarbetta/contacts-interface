import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Orders from "./containers/Orders";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>
    </Router>
  );
}

export default Navigation;
