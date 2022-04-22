import React from "react";

import { CalcButton } from "../CalcButton/CalcButton";
import { CalcLastButton } from "../CalcLastButton/CalcLastButton";

export const CalcButtons = ({ calcButtons, classIndex }) => {
  return calcButtons.map((button, i, arr) =>
    arr.length - 1 !== i ? (
      <CalcButton key={button} button={button} />
    ) : (
      <CalcLastButton key={button} button={button} classNumber={classIndex + 1} />
    )
  );
};
