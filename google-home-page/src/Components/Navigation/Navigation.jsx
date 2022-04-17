
import "./styles.css" 

import NavigationItem from "../NavigationItem/NavigationItem.jsx";
import NavigationIcon from "../NavigationIcon/NavigationIcon.jsx";

const navFirstItems = ["about", "store"];
const navSecondItems = ["Gmail", "images"];



const Navigation = () => {
  return(
<nav >
  <ul className="nav-bar-first-item">
  {navFirstItems.map(navItem => <NavigationItem navItem={ navItem } style="navbar-child-item" />)}
  </ul>
  <ul className="nav-bar-second-item">
  {navSecondItems.map(navItem => <NavigationItem navItem={ navItem } style="navbar-second-item" />)}
  <NavigationIcon style="navbar-second-item" icon={"beer"} />
  </ul>
</nav>
  )
}

export default Navigation;