import classes from "./Button.module.css";

const Button = ({ testId, children, clicked, id }) => {
  return (
    <button
      data-testid={testId}
      className={classes.button}
      onClick={clicked}
      id={id}
    >
      {children}
    </button>
  );
};
export default Button;
