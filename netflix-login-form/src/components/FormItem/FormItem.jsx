import "./styles.css"

export const FormItem = (props) => {
  return (
    <>
      <input
        className={props.cssClass}
        type={props.type}
        placeholder={props.placeholder}
        href={props.href}
      />
    </>
  );
};
