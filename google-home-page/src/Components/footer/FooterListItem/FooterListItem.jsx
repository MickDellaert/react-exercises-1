export const FooterListItem = (props) => {
  return (
      props.itemNames.map((itemName, index) => (
        <a className={props.itemClass} key={index} href="/#">
          <li>{itemName}</li>
        </a>
      ))
  );
};
