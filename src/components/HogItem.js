import React from "react";

function HogItem({ name, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

export default HogItem;
