import React from "react"
import "../css/Products.css"
const Products = () => {
  return (
    <div className='product'>
      <div className="product__info">
        <p>Pendrive</p>
        <p className="product__price"> <small>₹</small> <strong>2000</strong></p>
        <div className="product__ratings">
          <p>⭐⭐⭐⭐</p>
        </div>
        
      </div>
      <img src="https://m.media-amazon.com/images/I/81gqM6ouEcL._SX679_.jpg" alt="" />
      <button className="product__cart">add to cart</button>
    </div>
  )
}
export default Products