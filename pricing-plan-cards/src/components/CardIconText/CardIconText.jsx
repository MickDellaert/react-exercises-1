import React from "react";

import "./styles.css"

export const CardIconText = ({ cardIcon, cardIconClass, cardIconTexts }) => {
  return cardIconTexts.map((cardIconText, index) => (
    <div key={index} className={cardIconClass}>
      <i className={cardIcon}></i>
      <h4>{cardIconText}</h4>
    </div>
  ));
};
