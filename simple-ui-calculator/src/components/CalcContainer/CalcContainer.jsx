import React from "react";

import "./styles.css";

import { CalcInput } from "../CalcInput/CalcInput";
import { CalcButtonRow } from "../CalcButtonRow/CalcButtonRow";

export const CalcContainer = () => {
  return (
    <div className="calculator-container">
      <CalcInput />
      <CalcButtonRow />
    </div>
  );
};
