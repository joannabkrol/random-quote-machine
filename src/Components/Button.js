import classes from "./Button.module.css";

const Button = ({ children, clicked, id }) => {
  return (
    <button className={classes.button} onClick={clicked} id={id}>
      {children}
    </button>
  );
};
export default Button;
