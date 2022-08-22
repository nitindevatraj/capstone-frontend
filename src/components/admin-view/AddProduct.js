import React, { useState } from "react";
import axios from "axios";
import "./AddProject.css";

function AddProduct(props) {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    addProductName: "",
    addProductDesc: "",
    addProductCategory: "",
    addProductImages: "",
    addProductlink: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const url =
        "https://dream-travel-site.herokuapp.com/api/products/create/:userId";
      const { data: result } = await axios.post(url, data);
      alert(result.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form action="" method="post" onSubmit={submitHandler} className="form">
      <div className="col-25">
        <label htmlFor="pro">Add Product Name</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          onChange={onChangeHandler}
          name="product-name"
          id="pro"
          size="50"
        />
      </div>

      <div className="col-25">
        <label htmlFor="desc">Add Product description</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          onChange={onChangeHandler}
          name="product-desc"
          id="desc"
          size="50"
        />
      </div>

      <div className="col-25">
        <label htmlFor="cat">Add Category</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          name="product-category"
          id="cat"
          className="input1"
          size="50"
          onChange={onChangeHandler}
        />
      </div>
      <div className="col-25">
        <label htmlFor="img">Add Images</label>
      </div>
      <div className="col-75">
        <input
          type="file"
          name="product-image"
          onChange={onChangeHandler}
          id="img"
        />
      </div>
      <div className="col-25">
        <label htmlFor="link">Add Product Link</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          onChange={onChangeHandler}
          name="product-link"
          id="link"
        />
      </div>
      <button type="submit" className="add-button" onClick={props.onClick}>
        Add
      </button>
    </form>
  );
}

export default AddProduct;
