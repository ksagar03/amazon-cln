import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <h1>
              <strong>login page</strong>
            </h1>
          }
        />

        <Route
          path="/"
          element={
            <div className="app">
              <Navbar />
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
