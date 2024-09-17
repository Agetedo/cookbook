import Conteiner from "./Conteiner";
import headerLogo from "/logo-image.png";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import styles from "..//styles/StartShowing.module.scss";

export default function StartShowing() {
  return (
    <Conteiner className={styles.startShowing}>
      <StartPageLogo imgAlt={"Cook Book logo"} />
      <StartPageContent 
        title={"ANYBODY CAN COOK"} 
        text={"Explore a world of culinary inspiration with our collection recipes"}
        buttonText={"Get start!"}
      />
    </Conteiner>
  );
}

function StartPageLogo({ imgAlt }: { imgAlt: string }) {
  return (
    <div className={styles.startLogo}>
      <img src={headerLogo} alt={imgAlt} />
    </div>
  );
}

interface StartPageProps {
  title: string;
  text: string; 
  buttonText: string;
}
function StartPageContent({ title, text, buttonText }: StartPageProps) {
  return (
    <div className={styles.startItems}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
      <Link to={PathConstants.SELECTEDPAGE} className={styles.startButton}>{buttonText}</Link>
    </div>
  );
}