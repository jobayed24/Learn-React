import React from 'react';
import { Circle } from "react-feather";
export default function ColorDemo() {
    const colorMap = ["#A63578", "teal", "#000000", "orange", "red", "green"];
  return (
    <>
      <h1>Color Demo</h1>
      <div>
        {colorMap.map((color,index)=>(
            <Circle color={color} key={index} size={128} />
        ))}
      </div>
    </>
  )
}
