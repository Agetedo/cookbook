import Conteiner from "./Conteiner";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import arrowLink from "/pepicons-arrow.png";
import postImage from "/post-image.jpg";
import styles from "../styles/Post.module.scss";
const previewText = <>{"Whether it's the brand, the shape, or the ingredients that help you choose what pasta to keep in your pantry, we want to help answer some commonly raised questions about our pasta specifically, as well as the broader, oh-so-wonderful-world of pasta at large."}</>;

export default function Post() {
  return (
    <Conteiner className={styles.post}>
      <PostTitle 
        blogLink={"Back to Posts"}
        title={"Your Pasta Questions, Answered"}
        text={previewText}
        imgAlt={"Pasta"} 
      />
      <PostText />
    </Conteiner>
  );
}

interface PostTitleProps {
  blogLink: string;
  title: string;
  text: string | typeof previewText;
  imgAlt: string;
}
function PostTitle({ blogLink, imgAlt, title, text }: PostTitleProps) {
  return (
    <>
      <Link to={PathConstants.COOKBOOKBLOGPAGE} className={styles.titleLink}>
        <img src={arrowLink} alt="#" />
        {blogLink}
      </Link>
      <img src={postImage} alt={imgAlt} className={styles.postImage} />
      <h1 className={styles.postTitle}>{title}</h1>
      <p className={styles.previewText}>{text}</p>
    </>
  );
}

interface TextWrapperProps {
  children?: React.ReactNode;
}
function TextWrapper({ children }: TextWrapperProps) {
  return (
    <div className={styles.textWrapper}>
      {children}
    </div>
  );
}

function PostText() {
  return (
    <TextWrapper>
  
    </TextWrapper>
  );
}