import React, { useState } from "react";
import "./TravelProducts.css";
import Header from "../reusable-components/Header";
import Footer from "../reusable-components/Footer";
import Products from "./Products";
import productImage1 from "../../assets/images/product-image.jpg";
import productImage2 from "../../assets/images/product-image1.jpg";
import Backdrop from "../reusable-components/Backdrop";
import ProductModal from "./ProductModal";
function TravelProducts() {
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState({
    src: "",
    name: "",
  });
  function closeModalHandler() {
    setShowModal(false);
  }

  function onShopHandler(e) {
    setShowModal(true);
    setProductData({
      src: e.target.parentElement.children[0].src,
      name: e.target.parentElement.children[1].innerText,
    });
  }

  function onCloseHandler() {
    setShowModal(false);
  }

  return (
    <>
      <Header />
      <div className="travel-product-container">
        <Products
          src={productImage1}
          name={"product name1"}
          onShop={onShopHandler}
        />
        <Products
          src={productImage2}
          name={"product name2"}
          onShop={onShopHandler}
        />
        <Products
          src={productImage1}
          name={"product name1"}
          onShop={onShopHandler}
        />
        <Products
          src={productImage2}
          name={"product name2"}
          onShop={onShopHandler}
        />
        <Products
          src={productImage1}
          name={"product name1"}
          onShop={onShopHandler}
        />
        <Products
          src={productImage2}
          name={"product name2"}
          onShop={onShopHandler}
        />
        <Products
          src={productImage1}
          name={"product name1"}
          onShop={onShopHandler}
        />
        <Products
          src={productImage2}
          name={"product name2"}
          onShop={onShopHandler}
        />

        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && (
          <ProductModal
            src={productData.src}
            name={productData.name}
            onClose={onCloseHandler}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default TravelProducts;
