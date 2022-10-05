import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* here in react-router-dom version 6 switch has been replaced with Routes */}
        <Route
          path="/Cart"
          element={
            <h1>
              
              <Cart />
            </h1>
          }
        />

        <Route
          path="/"
          element={
            <div className="app">
              <Home />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
