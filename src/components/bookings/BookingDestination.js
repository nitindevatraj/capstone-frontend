import React from "react";
import "./BookingDestination.css";
function BookingDestination(props) {
  return (
    <div className="booking-des">
      <img src={props.src} alt="#" className="booking-des__img" />
      <p className="booking-des_name">{props.name}</p>
      <p className="booking-des_desc">{props.desc}</p>
      <button className="booking-des__btn" onClick={props.onSeeMore}>
        see more
      </button>
    </div>
  );
}

export default BookingDestination;
