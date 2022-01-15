import {
  BrowserRouter as Router,
  renderMatches,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
