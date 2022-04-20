import React from "react";
import CardTitles from "../CardTitles/CardTitles.jsx";

export const CardText = ({ cardTexts }) => {
  return (
    <>
      <CardTitles cardTitles={cardTexts.cardText} />
    </>
  );
};
