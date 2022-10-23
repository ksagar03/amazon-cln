import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
const Navbar = () => {
  const [{ Basket, user, user_name }] = useStateValue();
  const navigate=useNavigate()
  const handleUserLogin = () => {
    auth.signOut();
    navigate(!user && "/login")
  };
// ----------------------------------------Important------------------------------------------------------------
        // this below code is been replaced by "user_name"
        // now user name is added to the DATA LAYER
        // this user_name stores the name of the user(i.e it will take user email and it will take starting name 
        // till @)
        // if there is no user then user_name will store 'Guest'
// if(user)
  // {
  //   var name=user?.email
  //   // here we have used '?'(called optional chaining) because when we are fetching data from firebase 
  //   // sometimes it takes time to fetch the data so if there is a delay and this above line executes, 
  //   // we will get error so to overcome this we are using '?'   

  //   name= name.split("@")                         // this if condition is used to get name of the user from email
  //   name=name[0]                                 
  //   }
  //   else{
  //     name="guest"
  //   }
  // ---------------------------------------------Important-----------------------------------------------------------
  
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
        {/* <Link to={!user && "/login"}> */}
          <div onClick={handleUserLogin } className="navbar__nav-opts">
            <span className="navbar__nav-opt1">Hello, {user_name}</span>
            <span className="navbar__nav-opt2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        {/* </Link> */}
        <div className="navbar__nav-opts">
          <span className="navbar__nav-opt1">Returns</span>
          <span className="navbar__nav-opt2"> & Orders </span>
        </div>
        <div className="navbar__nav-opts">
          <span className="navbar__nav-opt1">Your</span>
          <span className="navbar__nav-opt2">Prime</span>
        </div>
      </div>
      {/* <Link to="/cart"> */}
        <div  className="navbar_cartoption" onClick={e=>{navigate("/cart")}}>
          <ShoppingCartCheckoutIcon />
          <span className="navbar__nav-opt2 items_added_to_cart">
            {Basket?.length}
          </span>
          {/* here in this Basket?.length "?" is used as ternary operator which terminate the above 
          line if basket provides a invalid length   */}
          {/* for above option we are defing two class name one is for styling and
                 another one is for dynamic updation of cart value */}
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Navbar;
