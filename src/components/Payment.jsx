import React from "react";
import "../css/Payment.css";
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { to_get_final_subtotal } from "./Reducer";

const Payment = () => {
  const [{ Basket, user_name }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const [disabled, setDisabled] = useState();
  const [succeeded, setSucceeded]=useState(false);
  const [processing, setProcessing]=useState("")

  const tohandlesubmit = (e) => {};
  // this below function is used to return any error while entering the card details
  const tohandlechange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ( <Link to="/cart">{Basket?.length} items</Link> )
        </h1>
        <div className="payment__section">
          {/* this section is for to display delivery address */}
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>
              {user_name}, <br /> street 13 hsr layout <br /> Bengaluru
              Karnataka{" "}
            </p>
          </div>
        </div>
        <div className="payment__section">
          {/* this section is for to display product which user is purchasing */}
          <div className="payment__title">
            <h3> Review items and delivery </h3>
          </div>
          <div className="payment__items">
            {Basket.map((item) => (
              <CartProduct
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                ratings={item.ratings}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          {/* this section is for to display payment method */}
          <div className="payment__details">
            <div className="payment__title">
              <h3>Payment method</h3>
              <form onSubmit={tohandlesubmit}>
                <CardElement onChange={tohandlechange} />
                <div className="payment__price">
                  <CurrencyFormat
                    renderText={(value) => <h3>order total: {value}</h3>}
                    decimalScale={2}
                    value={to_get_final_subtotal(Basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                  <button disabled={ processing || disabled || succeeded }>
                    <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
