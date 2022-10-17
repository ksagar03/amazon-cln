import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <Routes>
        {/* here in react-router-dom version 6 switch has been replaced with Routes */}
        <Route path="/login" element={
          <h1>
            <Login />
          </h1>
        } />
        <Route
          path="/Cart"
          element={
            <h2>
              <Navbar />
              <Cart />
            </h2>
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
