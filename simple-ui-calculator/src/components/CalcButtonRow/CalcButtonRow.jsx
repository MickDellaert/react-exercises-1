import React from "react";

import "./styles.css";

import { CalcButtons } from "../CalcButtons/CalcButtons";

const buttons = [
  ["AC", "DEL", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "AC"],
  ["0", ".", "="],
];

export const CalcButtonRow = () => {
  return (
    <>
      {buttons.map((buttonArray, index) => (
        <div key={index} className={`calc-item-${index + 1}`}>
          <CalcButtons
            
            classIndex={index}
            calcButtons={buttonArray}
          />
        </div>
      ))}
    </>
  );
};
