import React from "react";
import "./Products.css";
function Products(props) {
  return (
    <div className="travel-product">
      <img src={props.src} alt="#" className="travel-product-image" />
      <p className="travel-product-name">{props.name}</p>
      <button className="travel-product-shop-btn" onClick={props.onShop}>
        shop
      </button>
    </div>
  );
}

export default Products;
