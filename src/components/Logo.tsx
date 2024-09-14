import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import logo from "/logo-image.png";
import styles from "../styles/Logo.module.scss";

export default function HeaderLogo({ imgAlt }: { imgAlt: string }) {
  return (
    <Link to={PathConstants.STARTPAGE} className={styles.logo}>
      <img src={logo} alt={imgAlt} />
    </Link>
  );
}