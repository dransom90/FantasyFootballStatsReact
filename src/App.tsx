import React from "react";
import "reflect-metadata";
import "./App.css";
import Tabs from "./Components/Tabs";
import Title from "./Components/Title";

function App() {
  return (
    <>
      <div>
        <Title />
      </div>
      <Tabs />
    </>
  );
}
export default App;
