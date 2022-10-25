import React from "react";
import "../css/Payment.css";
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const Payment = () => {
  const [{ Basket, user_name }, dispatch] = useStateValue();

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
        </div>
      </div>
    </div>
  );
};

export default Payment;
