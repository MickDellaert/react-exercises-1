import { FooterListItem } from "../FooterListItem/FooterListItem";

const footerLists = [
  {
    listClass: "footer-section-1",
    itemClass: "footer-child-item1",
    itemNames: [
      { itemName: "Advertising" },
      { itemName: "Business" },
      { itemName: "How Search Works" },
    ],
  },
  {
    listClass: "footer-section-2",
    itemClass: "footer-child-item2",
    itemNames: [{ itemName: "Carbon neutral since 2007" }],
  },
  {
    listClass: "footer-section-3",
    itemClass: "footer-child-item3",
    itemNames: [
      { itemName: "Privacy" },
      { itemName: "Teams" },
      { itemName: "Settings" },
    ],
  },
];

export const FooterList = () => {
  return (
    <>
      {footerLists.map((el, index) => (
        <div key={index}>
          <ul className={el.listClass}>
            <FooterListItem
              itemClass={el.itemClass}
              itemNames={el.itemNames}
            />
          </ul>
        </div>
      ))}
    </>
  );
};
