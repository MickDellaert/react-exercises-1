import React from 'react'

export const CardIconText = ({cardIconTexts}) => {
  console.log(cardIconTexts)
  return cardIconTexts.map((cardIconText) => (
      <h4>{cardIconText}</h4>
    ))
  }


