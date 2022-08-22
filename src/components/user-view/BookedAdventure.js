import React from "react";
import "./BookedAdventure.css";
function BookedAdventure(props) {
  return (
    <div className="list-container">
      <div className="col-25">
        <p>date</p>
      </div>
      <div className="col-75">
        <p className="list-container__child">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="col-25">
        <p>date</p>
      </div>
      <div className="col-75">
        <p className="list-container__child">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="col-25">
        <p>date</p>
      </div>
      <div className="col-75">
        <p className="list-container__child">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="col-25">
        <p>date</p>
      </div>
      <div className="col-75">
        <p className="list-container__child">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="col-25">
        <p>date</p>
      </div>
      <div className="col-75">
        <p className="list-container__child">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="col-25">
        <p>date</p>
      </div>
      <div className="col-75">
        <p className="list-container__child">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

      <button type="button" className="close-button" onClick={props.onClick}>
        close
      </button>
    </div>
  );
}

export default BookedAdventure;
