import React from "react";
import "./BookingModal.css";
function BookingModal(props) {
  return (
    <div className="booking-modal-container">
      <div className="booking-modal-child1">
        <img src={props.src} alt="#" />
      </div>
      <div className="booking-modal-child2">
        <p className="modal-des_name">{props.name}</p>
        <p className="modal-des_desc">{props.desc}</p>
        <p className="modal-des_btn">book now</p>
        <p className="modal-des_btn" onClick={props.onClose}>
          close
        </p>
      </div>
    </div>
  );
}

export default BookingModal;
