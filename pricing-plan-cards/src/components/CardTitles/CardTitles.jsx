import React from "react";

import "./styles.css";

const CardTitles = ({ cardTitles }) => {
  return (
    <>
      <h3>{cardTitles.h3}</h3>
      <p>{cardTitles.p}</p>
      <h2>{cardTitles.h2}</h2>
    </>
  );
};

export default CardTitles;
