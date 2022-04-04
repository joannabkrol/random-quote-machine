import classes from "./Button.module.css";

const Button = ({ children, clicked }) => {
  return (
    <button className={classes.button} onClick={clicked}>
      {children}
    </button>
  );
};
export default Button;
