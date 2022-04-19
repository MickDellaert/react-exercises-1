import "./styles.css"

import { HeaderTitleSpan } from "../HeaderTitle/HeaderTitleSpan";

const headerTitleLetters = [
  { cssClass: "g", content: "G" },
  { cssClass: "o", content: "O" },
  { cssClass: "o2", content: "O" },
  { cssClass: "g2", content: "G" },
  { cssClass: "l", content: "L" },
  { cssClass: "e", content: "E" },
];

export const HeaderTitle = () => {
  return (
    <h1 className="header-title">
      {headerTitleLetters.map((headerTitle) => (
        <HeaderTitleSpan key={headerTitle.cssClass} cssClass={headerTitle.cssClass} content={headerTitle.content} />
      ))}
    </h1>
  );
};
