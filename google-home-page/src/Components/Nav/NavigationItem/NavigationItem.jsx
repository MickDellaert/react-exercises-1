import "./styles.css" 

const NavigationItem = ({navItemName, cssClassName}) => {
  return (
    <>
          <a className={cssClassName} href='#'>
            <li>{navItemName}</li>
          </a>
    </>
  );
};

export default NavigationItem;
