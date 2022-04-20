import React from "react";

export const CardIconText = ({ cardIcon, cardIconClass, cardIconTexts }) => {
  console.log(cardIconTexts);
  return cardIconTexts.map((cardIconText, index) => (
    <div key={index} className={cardIconClass}>
      <i className={cardIcon}></i>
      <h4>{cardIconText}</h4>
    </div>
  ));
};
