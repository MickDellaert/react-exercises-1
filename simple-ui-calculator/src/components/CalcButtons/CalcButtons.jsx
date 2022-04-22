import React from "react";

export const CalcButtons = ({ calcButtons, classIndex }) => {
  console.log(calcButtons);

  return calcButtons.map((button, i, arr) => {
    if (arr.length - 1 !== i) {
      return (
        <React.Fragment key={i}>
          <input type="submit" value={button}></input>{" "}
        </React.Fragment>
      );
    } else {
      return (
        <input
          key={i}
          className={`flex-item-${classIndex + 1}`}
          type="submit"
          value={button}
        ></input>
      );
    }
  });
};
