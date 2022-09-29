import React from "react"
import "../css/Products.css"
const Products = ({title,price,image,ratings}) => {
  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price"> <small>₹</small> <strong>{price}</strong></p>
        <div className="product__ratings">
          {
            Array(ratings).fill().map((_,i)=>(
              <p>⭐</p> 
              // this array will print the stars based on the given ratings
            ))
          }
          {/* <p>⭐⭐⭐⭐</p> */}
        </div>
        
      </div>
      <img src={image} alt="" />
      <button className="product__cart">add to cart</button>
    </div>
  )
}
export default Products