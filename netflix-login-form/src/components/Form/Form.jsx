import "./styles.css";

import { FormItem } from "../FormItem/FormItem";

const formItems = [
  { cssClass: "email", type: "text", placeholder: "Email" },
  { cssClass: "password", type: "password", placeholder: "Password" },
  { cssClass: "sign-in", type: "submit", href: "/#" },
];

export const Form = () => {
  return (
    <form action="Sign-in">
      {formItems.map((formItem, index) => (
        <FormItem
          key={index}
          cssClass={formItem.cssClass}
          type={formItem.type}
          placeholder={formItem.placeholder}
          href={formItem.href}
        />
      ))}
    </form>
  );
};
