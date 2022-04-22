import "./styles.css";

import { FooterListItem } from "../FooterListItem/FooterListItem";

const footerLists = [
  {
    itemNames: ["Advertising", "Business", "How Search Works"],
  },
  {
    itemNames: ["Carbon neutral since 2007"],
  },
  {
    itemNames: ["Privacy", "Teams", "Settings"],
  },
];

export const FooterList = () => {
  console.log(footerLists)
  return (
      footerLists.map((el, index) => (
        <div key={index}>
          <ul className={`footer-section-${index + 1}`}>
            <FooterListItem
              itemClass={`footer-child-item${index + 1}`}
              itemNames={el.itemNames}
            />
          </ul>
        </div>
      ))
  );
};
