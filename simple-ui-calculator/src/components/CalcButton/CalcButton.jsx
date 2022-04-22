import React from "react";

export const CalcButton = ({ button }) => {
  return (
    <React.Fragment>
      <input type="submit" value={button}></input>{" "}
    </React.Fragment>
  );
};
