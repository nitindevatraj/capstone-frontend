import React from "react";
import "./LogoutButton.css";
// import { Link } from "react-router-dom";

function LogoutButton() {
  const clickHandler = () => {};
  return (
    // <Link to="/adminview">
    <button className="button" onClick={clickHandler}>
      Logout
    </button>
    // </Link>
  );
}

export default LogoutButton;
