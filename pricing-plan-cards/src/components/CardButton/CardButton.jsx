import React from 'react';
import "./styles.css";

export const CardButton = ({buttonClass}) => {
  return (
    <button className={`submit${buttonClass}`}>Subscribe</button>
  )
}
