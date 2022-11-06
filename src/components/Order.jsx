import React from "react";
import "../css/Order.css";
import moment from "moment"; // this lib is used for getting time-stamp
import CartProduct from "./CartProduct";
const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:ma ')}</p>
      <small>{order.id}</small>
      {order.data.Basket.map((item) => (
              <CartProduct
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                ratings={item.ratings}
              />
            ))}
    </div>
  );
};

export default Order;
