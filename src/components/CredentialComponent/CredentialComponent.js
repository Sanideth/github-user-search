import classes from "./CredentialComponent.module.css";

const CredentialComponent = ({ type, text, icon, link }) => {
  return (
    <div className={classes.credentialComponent}>
      {icon}
      {type === "link" ? (
        <a href={link} className={classes.credentialLink}>
          {text}
        </a>
      ) : (
        <p className={classes.credentialText}>{text}</p>
      )}
    </div>
  );
};

export default CredentialComponent;
