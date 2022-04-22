import React from "react";
import CardTitles from "../CardTitles/CardTitles.jsx";

export const CardTitlesContainer = ({ cardData }) => {
  return (
    <>
      <CardTitles cardTitles={cardData.cardText} 
       />
    </>
  );
};
