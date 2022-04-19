import "./styles.css";
import { FormItem } from "./FormItem/FormItem";

const formItems = [
  { forlabel: "Email", type: "email", placeholder: "john@example.com" },
  { forlabel: "Password", type: "password", placeholder: "At least 8 characters" },
  { cssClass: "checkbox", type: "checkbox" },
];

export const SubHeaderTitle = () => {
  return (
    <div className="sub-header-title">
      <form action="true">
        <h3>Login</h3>

        {formItems.map((formItem) => (
          <FormItem
            key={formItem.type}
            cssClass={formItem.cssClass}
            forlabel={formItem.forlabel}
            type={formItem.type}
            placeholder={formItem.placeholder}
          />
        ))}

        <p className="form-title">
          By creating an account, you agree <br />
          <span>Terms and Conditions</span>
        </p>
        <a href={"/#"}>Create an Account</a>
      </form>
    </div>
  );
};
