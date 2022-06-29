import "../Styles/styles.css";
import React from "react";

function Card({ title, icon, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}

export default Card;
