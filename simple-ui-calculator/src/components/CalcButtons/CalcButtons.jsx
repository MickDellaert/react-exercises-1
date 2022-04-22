import React from "react";

export const CalcButtons = ({ calcButtons, classIndex }) => {
  console.log(calcButtons);

  return calcButtons.map((button, i, arr) =>
    arr.length - 1 !== i ? (
      <React.Fragment key={i}>
        <input type="submit" value={button}></input>{" "}
      </React.Fragment>
    ) : (
      <input
        key={i}
        className={`flex-item-${classIndex + 1}`}
        type="submit"
        value={button}
      ></input>
    )
  );
};
