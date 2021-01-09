import React from "react";
import "./App.js";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.image} alt={props.name} style={{ width: 100 }} />
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.email}</p>
          <p>{props.profession}</p>
          {
            <input
              type="text"
              value={props.name}
              onChange={props.onChangeName}
            />
          }
          <button className="button button3" onClick={props.onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
