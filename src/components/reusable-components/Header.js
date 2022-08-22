import React from "react";
import "./Header.css";
import LogoutButton from "./LogoutButton";
function Header() {
  return (
    <div className="header">
      <h2 className="title">Dream travels</h2>
      <LogoutButton />
    </div>
  );
}

export default Header;
