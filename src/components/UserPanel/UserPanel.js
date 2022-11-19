import classes from "./UserPanel.module.css";
import defaultAvatarImage from "../../images/defaultAvatar.png";
import StatComponent from "../StatComponent/StatComponent";
import CredentialComponent from "../CredentialComponent/CredentialComponent";
import { ReactComponent as IconLocation } from "../../images/icon-location.svg";
import { ReactComponent as IconTwitter } from "../../images/icon-twitter.svg";
import { ReactComponent as IconLink } from "../../images/icon-website.svg";
import { ReactComponent as IconCompany } from "../../images/icon-company.svg";
const UserPanel = () => {
  return (
    <div className={classes.userPanel}>
      <div className={classes.avatarContainer}>
        <img src={defaultAvatarImage} alt="User Avatar" />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.headerContainer}>
          <h1>The octocat</h1>
          <p className={classes.registrationDate}>21 January</p>
        </div>
        <a href="https://www.somewhere.com">@octocat</a>
        <p className={classes.bio}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem
          nemo at. Eos, provident praesentium quaerat dolor iure, harum nostrum
          vel, labore quas placeat dicta neque? Numquam animi eveniet odio.
        </p>
        <div className={classes.statsContainer}>
          <StatComponent text="Repos" number={100} />
          <StatComponent text="Followers" number={100} />
          <StatComponent text="Following" number={100} />
        </div>
        <div className={classes.credentialsContainer}>
          <CredentialComponent icon={<IconLocation />} text="San Fransisco" />
          <CredentialComponent
            icon={<IconTwitter />}
            text="data not available"
          />
          <CredentialComponent
            icon={<IconLink />}
            text="https://github.blog"
            link="https://github.blog"
            type="link"
          />
          <CredentialComponent
            icon={<IconCompany />}
            text="@github"
            link="https://github.com"
            type="link"
          />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
