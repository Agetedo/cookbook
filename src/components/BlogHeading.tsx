import Conteiner from "./Conteiner";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import arrowLink from "/pepicons-arrow.png";
import styles from "../styles/BlogHeading.module.scss";
const publishText = <>{"We don't publish a new CookBook recipe until we're certain it's the tastiest version out there, and we're constantly updating our old recipes with new techniques and improvements based on further testing and reader suggestions."}</>;

export default function BlogHeading() {
  return (
    <Conteiner className={styles.blogHeading}>
      <BlogTitle 
        recipesLink={"Back to Recipes"} 
        title={"CookBook the secret ingredient for home cooks!"} 
        text={publishText} />
    </Conteiner>
  );
}

interface BlogTitleProps {
  recipesLink: string;
  title: string;
  text: string | typeof publishText;
}
function BlogTitle({ recipesLink, title, text }: BlogTitleProps) {
  return (
    <>
      <Link to={PathConstants.SELECTEDPAGE} className={styles.titleLink}>
        <img src={arrowLink} alt="#" />
        {recipesLink}
      </Link>
      <h1 className={styles.blogTitle}>{title}</h1>
      <p className={styles.blogText}>{text}</p>
    </>
  );
}
