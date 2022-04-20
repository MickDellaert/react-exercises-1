import React from "react";
import CardTitles from "../CardTitles/CardTitles.jsx";

export const CardText = ({ cardData }) => {
  return (
    <>
      <CardTitles cardTitles={cardData.cardText} />
    </>
  );
};
