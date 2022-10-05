import React from "react";
import "../css/Cart.css";
import Subtotal from "./Subtotal";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart_leftside">
        <img
          className="cart_ads"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Samsung/Jup_22/Brandstore_Creatives/Phase2/_D58372311_WLD_Jupiter_2022_Phase2_Samsung_Family_1500x300_pc_store_header.jpg"
          alt=""
        />

        <div className="cart__title">
            <h2>
                Your Cart
            </h2>
        </div>
        <div className="cart__right"> 
            <Subtotal />
            <h4>Subtotal will be added here</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
