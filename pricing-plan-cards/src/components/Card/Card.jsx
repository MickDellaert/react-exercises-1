import { CardText } from "../CardText/CardText";
import { CardIcon } from "../CardIcon/CardIcon";

const cardData = [
  {
    cardClass: "card-1",
    cardText: { h3: "Free", p: "For Individual", h2: "$0" },
    iconData: {
      iconClass: "icon1",
      i: "gg-check-o",
      h4: ["One Device", "Unlimited Download", "Editable Files", "1GB Storage"],
    },
  },
  {
    cardClass: "card-2",
    cardText: { h3: "Pro", p: "For Company", h2: "$80" },
    iconData: {
      iconClass: "icon1",
      i: "gg-check-o",
      h4: [
        "Six Devices",
        "Unlimited Download",
        "300+ Icon Package",
        "Fully Editable Files",
        "500GB Storage",
      ],
    },
  },
  {
    cardClass: "card-3",
    cardText: { h3: "Enterprise", p: "For Team", h2: "$180" },
    iconData: {
      iconClass: "icon1",
      i: "gg-check-o",
      h4: [
        "Twelve Devices",
        "Unlimited Download",
        "3000+ Icon Package",
        "Fully Editable Files",
        "2TB Storage",
        "5TB Data Transfer",
      ],
    },
  },
];

export const Card = () => {
  return cardData.map((cardData, index) => (
    <>
      <div key={index} className={cardData.cardClass}>
        <CardText className={cardData.cardClass} cardTexts={cardData} />
        <CardIcon iconData={cardData.iconData} />
      </div>
    </>
  ));
};
