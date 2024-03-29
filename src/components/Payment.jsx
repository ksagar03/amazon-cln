import React from "react";
import "../css/Payment.css";
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { to_get_final_subtotal } from "./Reducer";
import instance from "../axios";
import { db } from "../firebase";

const Payment = () => {
  const navigate = useNavigate();
  const [{ Basket, user_name, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const toGetClientSecretKey = async () => {
      const response = await instance({
        method: "post",
        url: `/payments/create?total=${to_get_final_subtotal(Basket) * 100}`,
        // In above code we have given a url which will featch a secret key from clint side
        //  this secret chnages when ever we add or remove item from the basket
        // here we have multiplied a function with 100 and this is beacuse stripe only accepts currency
        // in sub currency format(i.e 1rupee in 100paise )
      });
      setClientSecret(response.data.clientSecret);
      // axios->  axios is a fetching librery which is used for Get,post request
    };

    toGetClientSecretKey();
  }, [Basket]);

  console.log("the client secret key is", clientSecret);
  const tohandlesubmit = async (e) => {
    e.preventDefault(); // this will prevent refreshing the page whenever this function is called
    setProcessing(true); // once after entering the card details we click on Buy now btn, after clicking
    //  it the btn will disabled so that user can't click on Buy now btn more than one time
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // this function is for confromation of the payment

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            Basket: Basket, // need to learn about nosql
            amount: paymentIntent.amount,
            created: paymentIntent.created, // this provides the time-stamps
          });

        setSucceeded(true);
        setProcessing(false);
        setError(null);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/order"); // still have confussion in it
      });
  };
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

          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
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
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error message */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
