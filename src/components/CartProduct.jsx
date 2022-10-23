import React from "react";
import "../css/CartProduct.css";
import { useStateValue } from "./StateProvider";
// import FlipMove from "react-flip-move";

const CartProduct = ({ id, image, price, title, ratings }) => {
  const [{ Basket }, dispatch] = useStateValue();
  function RemoveFromCart() {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
      // when we click on the button(remove from cart) it will return us the id of that product
    });
  }
  return ( 
    // <FlipMove className="flip-wrapper"> // we will do this later
      <div className="cartproduct">
        <img className="cartproduct__img" src={image} />
        <div className="cartproduct__info">
          <p className="cartproduct__title">{title}</p>
          <p className="cartproduct__price">
            <small>₹</small>
            <strong>{price}</strong>{" "}
          </p>
          <div className="cartproduct__ratings">
            {Array(ratings)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={RemoveFromCart} className="cartproduct__btn">
            Remove form cart
          </button>
        </div>
      </div>
    // </FlipMove>
  );
};

export default CartProduct;
