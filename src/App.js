import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


// Stripe: Stripe is a payment processing platform which provides us API to process the payment
// (i.e it provides secured way of processing the payment )

const promise = loadStripe(
  "pk_test_51Lx20gSHgvSf9YWJnU5hpwZ8HmOUodPhMjoimQNjuu1GPQumoAV0ip6OficVVnszkjpFijVv5Kl8Amt0imLnt3pD00MtJASpXe"
);
// In side this loadstripe is the public key provided by the stripe

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // useEffect is a hook which is rendered whenever there are some changes made in the website
    // also it will run only once
    // for eg: if the user changes his login details then this useEffect will be
    // triggered and it execute the code written in it.
    auth.onAuthStateChanged((authUser) => {
      console.log("current user is >>>>", authUser);
      if (authUser) {
        dispatch({
          type: "USER_STATE",
          user: authUser,
          user_name: authUser?.email.split("@")[0],
        });
      } else {
        dispatch({
          type: "USER_STATE",
          user: null,
          user_name: "Guest",
        });
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        {/* here in react-router-dom version 6 switch has been replaced with Routes */}
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/Cart"
          element={
            <div>
              <Navbar />
              <Cart />
            </div>
          }
        />
        <Route
          path="/payment"
          element={
            <div>
              <Navbar />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>
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
