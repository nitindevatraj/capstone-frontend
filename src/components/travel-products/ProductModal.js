import React from "react";
import "./ProductModal.css";
function ProductModal(props) {
  return (
    <div className="product-modal-container">
      <div className="product-modal-child1">
        <img src={props.src} alt="#" />
      </div>
      <div className="product-modal-child2">
        <p className="modal-product_name">{props.name}</p>
        <p className="modal-product_spec">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          voluptatem libero omnis, eius nam quasi? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Repellendus autem officia dolorum
          facere. Minus, optio!
        </p>
        <p className="modal-product_btn">buy now</p>
        <p className="modal-product_btn" onClick={props.onClose}>
          close
        </p>
      </div>
    </div>
  );
}

export default ProductModal;
