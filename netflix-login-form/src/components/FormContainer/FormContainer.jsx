import "./styles.css";

import { Form } from "../Form/Form";
import { SubHeader } from "../SubHeader/SubHeader";

export const FormContainer = () => {
  return (
    <div className="login-form-container">
      <Form />
      <SubHeader />
      <hr />
      <img
        className="logo"
        src="https://i.postimg.cc/hj9WcgVw/logo.png"
        alt="logo"
      ></img>
    </div>
  );
};
