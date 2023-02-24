import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(false);

  const filterGrease = () => {
    setGreased((greased) => !greased);
  };

  return (
    <div className="App">
      <Nav greased={greased} filterGrease={filterGrease} />
      <HogContainer greased={greased} />
    </div>
  );
}

export default App;
