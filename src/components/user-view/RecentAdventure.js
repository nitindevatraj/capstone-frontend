import React from "react";
import "./RecentAdventure.css";
function RecentAdventure(props) {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form action="" method="post" onSubmit={submitHandler} className="form">
      <div className="col-25">
        <label htmlFor="ad1">Adventure 1</label>
      </div>
      <div className="col-75">
        <textarea id="ad1" name="adventurereview1" cols="50" rows="5">
          add your review about the adventure...
        </textarea>
      </div>

      <div className="col-25">
        <label htmlFor="ad2">Adventure 2</label>
      </div>
      <div className="col-75">
        <textarea id="ad2" name="adventurereview2" cols="50" rows="5">
          add your review about the adventure...
        </textarea>
      </div>

      <div className="col-25">
        <label htmlFor="ad3">Adventure 3</label>
      </div>
      <div className="col-75">
        <textarea id="ad3" name="adventurereview3" cols="50" rows="5">
          add your review about the adventure...
        </textarea>
      </div>

      <div className="col-25">
        <label htmlFor="ad4">Adventure 4</label>
      </div>
      <div className="col-75">
        <textarea id="ad4" name="adventurereview4" cols="50" rows="5">
          add your review about the adventure...
        </textarea>
      </div>

      <button type="submit" className="add-button" onClick={props.onClick}>
        Add Review
      </button>
    </form>
  );
}

export default RecentAdventure;
