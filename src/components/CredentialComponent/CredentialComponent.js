import classes from "./CredentialComponent.module.css";

const CredentialComponent = ({ type, text, icon, link, weird }) => {
  const opacity = text === "Not Available";
  return (
    <div
      className={classes.credentialComponent}
      style={opacity ? { opacity: ".5" } : {}}
    >
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
        <p>{text}</p>
      )}
    </div>
  );
};

export default CredentialComponent;
