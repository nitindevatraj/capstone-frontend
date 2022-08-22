import React, { useState } from "react";
import axios from "axios";
import "./TravelStory.css";
function TravelStory(props) {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    yourName: "",
    yourImages: "",
    yourStory: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const url =
        "https://dream-travel-site.herokuapp.com/api/travelBlog/create/:userId";
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
        <label htmlFor="name">Your Name</label>
      </div>
      <div className="col-75">
        <input
          type="text"
          name="yourName"
          onChange={onChangeHandler}
          id="name"
          size="50"
        />
      </div>

      <div className="col-25">
        <label htmlFor="img">Your Images</label>
      </div>
      <div className="col-75">
        <input
          type="file"
          name="yourImage"
          onChange={onChangeHandler}
          id="img"
        />
      </div>
      <div className="col-25">
        <label htmlFor="story">Your Story</label>
      </div>
      <div className="col-75">
        <textarea
          id="story"
          cols="50"
          onChange={onChangeHandler}
          rows="8"
          name="yourStory"
        >
          your travel story ...
        </textarea>
      </div>
      <button type="submit" className="add-button" onClick={props.onClick}>
        Add
      </button>
    </form>
  );
}

export default TravelStory;
