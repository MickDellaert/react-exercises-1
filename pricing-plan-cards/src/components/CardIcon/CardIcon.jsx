import React from "react";
import { CardIconText } from "../CardIconText/CardIconText";

export const CardIcon = ({ iconData }) => {
  console.log(iconData);
  return (
    <>
      <div className={iconData.iconClass}>
        {iconData.iconClass}
        <CardIconText cardIconTexts={iconData.h4} />
      </div>
    </>
  );
};
