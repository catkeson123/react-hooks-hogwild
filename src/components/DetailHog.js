import React from "react";

function DetailHog({
  name,
  image,
  specialty,
  weight,
  greased,
  medalAchieved,
  handleClick,
}) {
  const handleDetailClick = (e) => {
    handleClick();
  };

  return (
    <div onClick={handleDetailClick}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Specialty: {specialty}</h3>
      <h3>Weight: {weight}</h3>
      <h3>Greased: {greased ? "yes" : "no"}</h3>
      <h3>Highest Medal Achieved: {medalAchieved}</h3>
    </div>
  );
}

export default DetailHog;
