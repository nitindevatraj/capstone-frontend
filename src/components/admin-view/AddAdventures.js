import "./AddAdventures.css";
import React, { useState } from "react";
import axios from "axios";

function AddAdventures(props) {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    addDestination: "",
    addPricingPerHead: "",
    addImages: "",
    addDescription: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const url =
        "https://dream-travel-site.herokuapp.com/api/adventure/create/:userId";
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
        <label htmlFor="dest">Add Destination</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          onChange={onChangeHandler}
          name="destination"
          id="dest"
          size="50"
        />
      </div>
      <div className="col-25">
        <label htmlFor="pph">Add Pricing Per Head</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          onChange={onChangeHandler}
          name="pricing-per-head"
          id="pph"
          size="50"
        />
      </div>
      <div className="col-25">
        <label htmlFor="img">Add Images</label>
      </div>
      <div className="col-75">
        <input type="file" onChange={onChangeHandler} name="image" id="img" />
      </div>
      <div className="col-25">
        <label htmlFor="desp">Add Description</label>
      </div>
      <div className="col-75">
        <textarea
          id="desp"
          onChange={onChangeHandler}
          cols="50"
          name="description"
          rows="8"
        >
          add description ...
        </textarea>
      </div>
      <button type="submit" className="add-button" onClick={props.onClick}>
        Add
      </button>
    </form>
  );
}

export default AddAdventures;
