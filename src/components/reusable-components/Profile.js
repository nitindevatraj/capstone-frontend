import React from "react";
import "./Profile.css";
function Profile(props) {
  return (
    <div className="profile_container">
      <img src={props.src} alt="#" className="profile_pic" />
      <p className="profile_name">{props.name}</p>
      <p className="profile_role">{props.role}</p>
    </div>
  );
}

export default Profile;
