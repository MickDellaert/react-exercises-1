import "./styles.css";

export const FormItem = (props) => {
  return props.forlabel ? (
    <>
      <label htmlFor={props.forlabel}>{props.forlabel}</label>
      <input
        className={props.cssClass}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  ) : (
    <input
      className={props.cssClass}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
};

