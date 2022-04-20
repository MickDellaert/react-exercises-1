import React from "react";

const CardTitles = ({ cardTitles }) => {
  return (
    <>
      <h3>{cardTitles.h3}</h3>
      <div>{cardTitles.p}</div>
      <h2>{cardTitles.h2}</h2>
    </>
  );
};

export default CardTitles;
