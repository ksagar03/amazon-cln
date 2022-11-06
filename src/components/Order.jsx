import React from "react";
import "../css/Order.css";
import moment from "moment"; // this lib is used for getting time-stamp
import CartProduct from "./CartProduct";
import CurrencyFormat from "react-currency-format";
const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:ma ')}</p>
      <small className="order__id">{order.id}</small>
      {order.data.Basket.map((item) => (
              <CartProduct
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                ratings={item.ratings}
                hideButton // if this key word is called then the button will be hidden this is keyword is defined 
                // inside the cartproduct.js
              />
            ))}
        <CurrencyFormat 
        renderText={(value)=>(
          <h3 className="order__total" >Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"₹"}
        />
    </div>
  );
};

export default Order;
