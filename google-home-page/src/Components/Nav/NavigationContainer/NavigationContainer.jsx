import "./styles.css";

import NavigationItem from "../NavigationItem/NavigationItem";
import NavigationIcon from "../NavigationIcon/NavigationIcon.jsx";
import NavigationPicture from "../NavigationPicture/NavigationPicture";

const navFirstNames = ["about", "store"];
const navSecondNames = ["Gmail", "images"];

const NavigationContainer = () => {
  return (
    <nav>
      <ul className="nav-bar-first-item">
        {navFirstNames.map((navFirstName) => (
          <NavigationItem
            key={navFirstName}
            navItemName={navFirstName}
            cssClassName="navbar-child-item"
          />
        ))}
      </ul>
      <ul className="nav-bar-second-item">
        {navSecondNames.map((navSecondName) => (
          <NavigationItem
            key={navSecondName}
            navItemName={navSecondName}
            cssClassName="navbar-second-item"
          />
        ))}
        <NavigationIcon cssClassName="navbar-second-item" icon={"beer"} />
        <NavigationPicture cssClassName="navbar-second-item"/>
      </ul>
    </nav>
  );
};

export default NavigationContainer;
