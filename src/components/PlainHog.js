import React from "react";

function PlainHog({ name, image, handleClick }) {
  const handlePlainClick = (e) => {
    handleClick();
  };

  return (
    <div onClick={handlePlainClick}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

export default PlainHog;
