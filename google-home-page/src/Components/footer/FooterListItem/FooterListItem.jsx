export const FooterListItem = (props) => {
  console.log(props)
  return (
    <>
      {props.itemNames.map((itemName, index) => (
        <a className={props.itemClass} key={index} href="/#">
          <li>{itemName}</li>
        </a>
      ))}
    </>
  );
};
