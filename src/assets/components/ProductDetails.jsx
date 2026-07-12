import React,{ useState} from 'react';
import "./ProductDetails.css";

function ProductDetails(){
    const[product,setproduct]= useState({});

    const handlefetch=async()=>{
        const res=await fetch("https://fakestoreapi.com/products/12")
        const data=await res.json()
        setproduct(data);
    }
    
    return(
    <div className="card">
  <img
    src={product.image}
    alt=""
    className="image" height="200" width="200"
  />

  <div className="content">
    <p className="sale">HOT SALE</p>

    <h1>{product.title}</h1>

    <p>{product.description}</p>

    <p className="old-price">$2500</p>

    <h1>${product.price}</h1>

    <button className="cart">Add to Cart</button>

    <div className="footer">
      <p>{product.rating?.count} Reviews</p>
      <p className="stock">In Stock</p>
    </div>
  </div>
</div>
    )
}

export default ProductDetails;