import React, { useEffect, useState } from "react";
import "../css/Orders.css";
import { db } from "../firebase";
import { useStateValue } from "./StateProvider";
const Orders = () => {
  const [{ Basket, user_name }] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user_name) {
      db.collection("users")
        .doc(user_name?.id)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user_name]);
  return <div className="orders"></div>;
};

export default Orders;
