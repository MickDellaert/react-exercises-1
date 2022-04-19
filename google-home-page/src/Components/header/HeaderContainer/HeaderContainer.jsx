import "./styles.css";

import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { HeaderInput } from "../HeaderInput/HeaderInput";
import { HeaderButton } from "../HeaderButton/HeaderButton";

const buttonNames = ["Google Search", "I'm Feeling Lucky"];

export const HeaderContainer = () => {
  return (
    <header>
      <HeaderTitle />
      <HeaderInput />
      {buttonNames.map((buttonName) => (
        <HeaderButton key={buttonName} buttonName={buttonName} />
      ))}
    </header>
  );
};
