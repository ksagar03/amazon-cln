import "../css/Products.css";
import { useStateValue } from "./StateProvider";
const Products = ({ id, title, price, image, ratings }) => {
  const [{ Basket }, dispatch] = useStateValue();
// here dispatch will be linking to reducer function in Reducer.js
  // console.log("add to cart list ----->",Basket)
  const add_to_cart = () => {
    // this function will tell us what to do when we click on add to cart button \
    // it dispatches data into datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        ratings: ratings,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small> <strong>{price}</strong>
        </p>
        <div className="product__ratings">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
              // this array will print the stars based on the given ratings
            ))}
          {/* <p>⭐⭐⭐⭐</p> */}
        </div>
      </div>
      <img src={image} alt="" />
      <button className="product__cart" onClick={add_to_cart}>
        add to cart
      </button>
    </div>
  );
};
export default Products;
