import React from "react";
import "./Client.css";
import mars from "../static/mars-solid.svg";
import venus from "../static/venus-solid.svg";

export default function(props) {
  const { name, email, sex, avatar, age, address } = props.data;

  return (
    <div className="client">
      <img src={avatar} alt="avatar"></img>
      <div>
        <span>{name}</span>
        <span>{age} lat</span>
        <span>
          <img className="gender" src={sex ? venus : mars} alt={sex ? "female" : "male"}></img>
        </span>
        <span>{address.city}</span>
        <span>
          {address.street} {address.houseNumber}
        </span>
        <span>
          <strong>{email}</strong>
        </span>
      </div>
    </div>
  );
}
