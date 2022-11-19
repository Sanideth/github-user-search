import classes from "./StatComponent.module.css";
const StatComponent = ({ text, stat }) => {
  return (
    <div className={classes.statComponent}>
      <p className={classes.text}>{text}</p>
      <h3 className={classes.number}>{stat}</h3>
    </div>
  );
};

export default StatComponent;
