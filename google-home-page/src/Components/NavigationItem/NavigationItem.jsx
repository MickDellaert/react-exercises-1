import "./styles.css" 

const NavigationItem = ({navItem, style}) => {
  return (
    <>
          <a className={style} href='#'>
            <li>{navItem}</li>
          </a>
    </>
  );
};

export default NavigationItem;
