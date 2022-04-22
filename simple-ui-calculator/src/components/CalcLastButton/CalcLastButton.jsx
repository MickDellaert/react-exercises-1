import React from "react";

export const CalcLastButton = ({ button, classNumber }) => {
  return (
    <input
      className={`flex-item-${classNumber}`}
      type="submit"
      value={button}
    ></input>
  );
};
