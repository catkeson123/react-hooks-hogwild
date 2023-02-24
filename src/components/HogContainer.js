import React from "react";
import HogItem from "./HogItem.js";
import hogs from "../porkers_data";

function HogContainer({ greased, sort }) {
  const filterHogs = greased
    ? hogs.filter((hog) => {
        return hog.greased;
      })
    : hogs;

  const byNameOrWeight = (hogA, hogB) => {
    switch (sort) {
      case "name":
        if (hogA.name < hogB.name) {
          return -1;
        } else {
          return 1;
        }
      case "weight":
        return hogA.weight - hogB.weight;
      default:
        return 0;
    }
  };

  const sortedHogs = filterHogs.sort(byNameOrWeight);

  return (
    <div className="ui grid container">
      {sortedHogs.map((hog) => (
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
