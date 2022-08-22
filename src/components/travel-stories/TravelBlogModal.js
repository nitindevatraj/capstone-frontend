import React from "react";
import "./TravelBlogModal.css";
function TravelBlogModal(props) {
  return (
    <div className="TravelBlogModalContainer">
      <div className="modal-container-child1">
        <img src={props.src} alt="#" />
      </div>
      <div className="modal-container-child2">
        <div className="modal-card-name">{props.name}</div>
        <div className="modal-card-desc">{props.desc}</div>
        <button className="modal-card-btn" onClick={props.onClick}>
          close
        </button>
      </div>
    </div>
  );
}

export default TravelBlogModal;
