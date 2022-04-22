import "./styles.css";

import profilePic from "../../../assets/navbar-img.jpg";

const NavigationPicture = ({ cssClassName }) => {
  return (
    <a className={cssClassName} href="/#">
      <img src={profilePic} alt="user" />
    </a>
  );
};

export default NavigationPicture;
