import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-task" element={<AddNew />} />
        <Route path="edit-task/:taskId" element={<AddNew />} />
      </Routes>
    </Router>
  );
}

export default App;
