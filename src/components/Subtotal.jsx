import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { to_get_final_subtotal } from "./Reducer";
import { useNavigate } from "react-router-dom";
//  this currencyformat is a component which is used to handle the fallowing feature
// 1.Prefix, suffix and thousand separator.
// 2. Custom format pattern.
// 3. Masking.
// 4. Custom formatting handler.
// 5. Formatting a input or a simple text.

const Subtotal = () => {
  const [{ Basket }] = useStateValue();
  // next task is to calculate subtotal
  const navigate= useNavigate()
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({Basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              Add gift vouchers
            </small>
          </>
        )}
        decimalScale={2}
        value={to_get_final_subtotal(Basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e=>{navigate("/payment")}}> Proceed to Checkout </button>
    </div>
  );
};

export default Subtotal;
