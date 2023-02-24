import React from "react";
import HogItem from "./HogItem.js";
import hogs from "../porkers_data";

function HogContainer() {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <HogItem name={hog.name} image={hog.image} key={hog.id} />
      ))}
    </div>
  );
}

export default HogContainer;
