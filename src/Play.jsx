import React from 'react';
import './Play.css';
import Part1 from "./components2/Part1";
import Part2 from "./components2/Part2";
import Part3 from "./components2/Part3";
import Part4 from "./components2/Part4";
import Part5 from "./components2/Part5";

function Play() {
  return (
    <div className="app">
      <Part1 />
      <Part3 />
      <Part2 />
      <Part4 />
      <Part5 />
    </div>
  );
}

export default Play;