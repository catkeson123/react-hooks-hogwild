import React, { useState } from "react";
import PlainHog from "./PlainHog";
import DetailHog from "./DetailHog";

function HogItem({ name, image, specialty, weight, greased, medalAchieved }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((clicked) => !clicked);
  };

  let hog;

  if (!clicked) {
    hog = <PlainHog name={name} image={image} handleClick={handleClick} />;
  } else if (clicked) {
    hog = (
      <DetailHog
        name={name}
        image={image}
        specialty={specialty}
        weight={weight}
        greased={greased}
        medalAchieved={medalAchieved}
        handleClick={handleClick}
      />
    );
  }

  return <div className="ui four wide column image pigTile">{hog}</div>;
}

export default HogItem;
