import React from "react";
import "../css/CartProduct.css";

const CartProduct = ({ id, image, price, title, ratings }) => {
  return (
    <div className="cartproduct">
      <img className="cartproduct__img" src={image} />
      <div className="cartproduct__info">
        <p className="cartproduct__title">{title}</p>
        <p className="cartproduct__price"><small>₹</small><strong>{price}</strong> </p>
        <div className="cartproduct__ratings">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="cartproduct__btn">Remove form cart</button>
      </div>
    </div>
  );
};

export default CartProduct;
