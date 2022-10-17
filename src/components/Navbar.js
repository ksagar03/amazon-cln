import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useStateValue } from "./StateProvider";
const Navbar = () => {
  const [{ Basket }] = useStateValue();

  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="navbar__search">
        <input type="text" className="navbar__search-in" />
        {/* search logo */}
        <SearchIcon className="navbar__search-icon" />
      </div>

      <div className="navbar__nav">
        <Link to="/login">
        <div className="navbar__nav-opts">
          <span className="navbar__nav-opt1">Hello</span>
          <span className="navbar__nav-opt2">Sign In</span>
        </div>
        </Link>
        <div className="navbar__nav-opts">
          <span className="navbar__nav-opt1">Returns</span>
          <span className="navbar__nav-opt2"> & Orders </span>
        </div>
        <div className="navbar__nav-opts">
          <span className="navbar__nav-opt1">Your</span>
          <span className="navbar__nav-opt2">Prime</span>
        </div>
      </div>
      <Link to="/cart">
        <div className="navbar_cartoption">
          <ShoppingCartCheckoutIcon />
          <span className="navbar__nav-opt2 items_added_to_cart">
            {Basket?.length}
          </span>
          {/* here in this Basket?.length "?" is used as ternary operator which terminate the above 
          line if basket provides a invalid length   */}
          {/* for above option we are defing two class name one is for styling and
                 another one is for dynamic updation of cart value */}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
