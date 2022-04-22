import React from "react";
import { CardIconText } from "../CardIconText/CardIconText";

export const CardIconContainer = ({ iconData }) => {
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
