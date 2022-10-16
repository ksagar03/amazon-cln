import React from "react";
import "../css/Cart.css";
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Cart = () => {
  const [{ Basket }] = useStateValue();
  return (
    <div className="cart">
      <div className="cart_leftside">
        <img
          className="cart__ads"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Samsung/Jup_22/Brandstore_Creatives/Phase2/_D58372311_WLD_Jupiter_2022_Phase2_Samsung_Family_1500x300_pc_store_header.jpg"
          // src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div className="cart__title">
          <h4>Your Cart</h4>
        </div>
        {Basket.map((item) => (
          <CartProduct
            id={item.id}
            price={item.price}
            title={item.title}
            image={item.image}
            ratings={item.ratings}
          />
        ))}
      </div>
      <div className="cart__rightside">
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
