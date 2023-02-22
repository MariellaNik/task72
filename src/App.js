import React from "react";
import "./App.css";
import { Tags } from "./Tags";

function App() {
  const tags = ["boomdotdev", "task", "tags", "react"]
  return (
    <div className="App">
      <Tags tags={tags} />
    </div>
  );
}

export default App;
