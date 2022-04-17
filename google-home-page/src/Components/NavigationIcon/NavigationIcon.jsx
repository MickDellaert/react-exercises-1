import "./styles.css";

const NavigationIcon = ({ style, icon }) => {
  return (
    <>
      <a className={style} href="#">
        <i className={`fas fa-${icon}`} />
      </a>
    </>
  );
};

export default NavigationIcon;
