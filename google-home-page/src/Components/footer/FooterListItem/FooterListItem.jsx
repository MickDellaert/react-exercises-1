export const FooterListItem = (props) => {
  return (
    <>
      {props.itemNames.map((el, index) => (
        <a className={props.itemClass} key={index} href="/#">
          <li>{el.itemName}</li>
        </a>
      ))}
    </>
  );
};
