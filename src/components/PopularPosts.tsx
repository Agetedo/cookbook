import Conteiner from "./Conteiner";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import arrowLink from "/pepicons-arrow.png";
import styles from "../styles/PopularPosts.module.scss";

export default function PopularPosts() {
  return (
    <Conteiner className={styles.popularPosts}>
      
    </Conteiner>
  );
}

/*interface BlogTitleProps {
  recipesLink: string;
  title: string;
  text: string | typeof publishText;
}*/
