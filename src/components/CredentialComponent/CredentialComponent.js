import classes from "./CredentialComponent.module.css";

const CredentialComponent = ({ type, text, icon, link, weird }) => {
  return (
    <div className={classes.credentialComponent}>
      {icon}
      {type === "link" ? (
        <a
          href={link}
          className={classes.credentialLink}
          style={weird ? { marginLeft: "-.6rem" } : {}}
        >
          {text}
        </a>
      ) : (
        <p className={classes.credentialText}>{text}</p>
      )}
    </div>
  );
};

export default CredentialComponent;
