import React, { Component } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Update from "./components/Update";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/register" element={<Register />}></Route>
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
