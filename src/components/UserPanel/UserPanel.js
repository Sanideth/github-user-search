import classes from "./UserPanel.module.css";
import StatComponent from "../StatComponent/StatComponent";
import CredentialComponent from "../CredentialComponent/CredentialComponent";
import { ReactComponent as IconLocation } from "../../images/icon-location.svg";
import { ReactComponent as IconTwitter } from "../../images/icon-twitter.svg";
import { ReactComponent as IconLink } from "../../images/icon-website.svg";
import { ReactComponent as IconCompany } from "../../images/icon-company.svg";
const UserPanel = ({ data }) => {
  return (
    <div className={classes.userPanel}>
      <div className={classes.avatarContainer}>
        <img src={data.avatar_url} alt="User Avatar" />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.headerContainer}>
          <div className={classes.heading}>
            <h1>{data.name ? data.name : `@${data.login}`}</h1>
            <a href={data.html_url} className={classes.ghLink}>
              {data.login && `@${data.login}`}
            </a>
          </div>

          <p className={classes.registrationDate}>
            {data.created_at &&
              `Joined ${new Date(data.created_at)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}`}
          </p>
        </div>

        <p className={classes.bio} style={!data.bio ? { opacity: "0.5" } : {}}>
          {data.bio ? data.bio : "Bio not available"}
        </p>
        <div className={classes.statsContainer}>
          <StatComponent text="Repos" stat={data.public_repos} />
          <StatComponent text="Followers" stat={data.followers} />
          <StatComponent text="Following" stat={data.following} />
        </div>
        <div className={classes.credentialsContainer}>
          <CredentialComponent
            icon={<IconLocation />}
            text={
              data.location
                ? data.location.split(",").slice(0, -1)
                : "Not Available"
            }
          />
          <CredentialComponent
            icon={<IconTwitter />}
            text={
              data.twitter_username ? data.twitter_username : "Not Available"
            }
            link={
              data.twitter_username &&
              `https://twitter.com/${data.twitter_username}`
            }
            type={data.twitter_username && "link"}
          />
          <CredentialComponent
            icon={<IconLink />}
            text={data.blog ? data.blog : "Not Available"}
            link={data.blog && data.blog}
            weird={true}
            type={data.blog && "link"}
          />
          <CredentialComponent
            icon={<IconCompany />}
            text={data.company ? data.company : "Not Available"}
            link={
              data.company &&
              `https://github.com/${data.company
                .replace("/@", "")
                .replaceAll(" ", "")}`
            }
            type={data.company && "link"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
