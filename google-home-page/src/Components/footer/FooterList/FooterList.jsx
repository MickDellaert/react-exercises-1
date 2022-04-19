import { FooterListItem } from "../FooterListItem/FooterListItem";

const footerLists = [
  {
    listName: "footer-section-1",
    cssClass: "footer-child-item1",
    itemNames: [
      { itemName: "Advertising" },
      { itemName: "Business" },
      { itemName: "How Search Works" },
    ],
  },
  {
    listName: "footer-section-2",
    cssClass: "footer-child-item2",
    itemNames: [{ itemName: "Carbon neutral since 2007" }],
  },
  {
    listName: "footer-section-3",
    cssClass: "footer-child-item3",
    itemNames: [
      { itemName: "Privacy" },
      { itemName: "Teams" },
      { itemName: "Settings" },
    ],
  },
];

export const NewList = () => {
  return (
    <>
      {footerLists.map((el, index) => (
        <div key={index}>
          <ul className={el.listName}>
            <FooterListItem
              listName={el.listName}
              cssClass={el.cssClass}
              itemNames={el.itemNames}
            />
          </ul>
        </div>
      ))}
    </>
  );
};
