import "./styles.css";

const NavigationIcon = ({ cssClassName, icon }) => {
  return (
    <>
      <a className={cssClassName} href="#">
        <i className={`fas fa-${icon}`} />
      </a>
    </>
  );
};

export default NavigationIcon;
