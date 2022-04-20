import React from "react";
import { CardIconText } from "../CardIconText/CardIconText";

export const CardIcon = ({ iconData }) => {
  return (
    <>
      <CardIconText
        cardIconTexts={iconData.h4}
        cardIcon={iconData.i}
        cardIconClass={iconData.iconClass}
      />
    </>
  );
};
