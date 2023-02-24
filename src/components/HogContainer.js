import React from "react";
import HogItem from "./HogItem.js";
import hogs from "../porkers_data";

function HogContainer({ greased }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <HogItem
          name={hog.name}
          image={hog.image}
          key={hog.id}
          specialty={hog.specialty}
          weight={hog.weight}
          greased={hog.greased}
          medalAchieved={hog["highest medal achieved"]}
        />
      ))}
    </div>
  );
}

export default HogContainer;
