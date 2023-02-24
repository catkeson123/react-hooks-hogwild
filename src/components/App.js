import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(false);

  const filterGrease = () => {
    setGreased((greased) => !greased);
  };

  const [sort, setSort] = useState("");

  const toggleSort = (someString) => {
    setSort(someString);
  };

  return (
    <div className="App">
      <Nav
        greased={greased}
        filterGrease={filterGrease}
        toggleSort={toggleSort}
      />
      <HogContainer greased={greased} />
    </div>
  );
}

export default App;
