import { CardTitlesContainer } from "../CardTitlesContainer/CardTitlesContainer";
import { CardIconContainer } from "../CardIconContainer/CardIconContainer";
import { CardButton } from "../CardButton/CardButton";

const data = [
  {
    id: "1",
    cardText: { h3: "Free", p: "For Individual", h2: "$0" },
    iconData: {
      id: "4",
      iconClass: "icon1",
      i: "gg-check-o",
      h4: ["One Device", "Unlimited Download", "Editable Files", "1GB Storage"],
    },
  },
  {
    id: "2",
    cardText: { h3: "Pro", p: "For Company", h2: "$80" },
    iconData: {
      id: "5",

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
    id: "3",
    cardText: { h3: "Enterprise", p: "For Team", h2: "$180" },
    iconData: {
      id: "6",
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
  return data.map((cardData, index) => (
      <div key={cardData.id} className={`card-${index + 1}`} >
        <CardTitlesContainer  cardData={cardData} />
        <CardIconContainer  iconData={cardData.iconData} />
        <CardButton buttonClass={index + 1} />
      </div>
  ));
};
