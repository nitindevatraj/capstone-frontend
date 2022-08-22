import React, { useState } from "react";
import axios from "axios";
import "./ShareExperience.css";
function ShareExperience(props) {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    shareYourExperienceWithUs: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const url =
        "https://dream-travel-site.herokuapp.com/api/userExperience/create/:userId";
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
        <label htmlFor="share">Share Your Experience With Us</label>
      </div>
      <div className="col-75">
        <textarea
          id="share"
          cols="60"
          rows="15"
          onChange={onChangeHandler}
          name="shareYourExperienceWithUs"
        >
          your experience with us ...
        </textarea>
      </div>
      <button type="submit" className="add-button" onClick={props.onClick}>
        Add
      </button>
    </form>
  );
}

export default ShareExperience;
