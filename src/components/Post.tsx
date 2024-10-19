import Conteiner from "./Conteiner";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import arrowLink from "/pepicons-arrow.png";
import postImage from "/post-image.jpg";
import styles from "../styles/Post.module.scss";
const previewText = <>{"Whether it's the brand, the shape, or the ingredients that help you choose what pasta to keep in your pantry, we want to help answer some commonly raised questions about our pasta specifically, as well as the broader, oh-so-wonderful-world of pasta at large."}</>;
const question1 = <>{"Should I rinse my pasta in cold water after cooking?"}</>;
const answer1 = <>{"Unequivocally no. When you rinse your pasta after cooking, you rinse off all the starchy goodness that is going to help cling to the sauce. You're also washing away a lot of the delicious briny qualities that it has picked up from the salted cooking water. We do know that leaving your pasta drained, unrinsed, and unattended for too long can certainly leave you with a sticky mess. However, once you've added the pasta to a pan with a warm sauce, it will loosen its grip once more."}</>;
const question2 = <>{"What pasta shape do Italians eat the most?"}</>;
const answer2 = <>{"While this can vary depending on region, the most popular pasta shapes in Italy tend to be penne and spaghetti. While both are exceptional vessels for sauce, they each serve a different purpose when it comes to pasta eating. Where spaghetti is excellent for a simple cacio e pepe, penne is the perfect choice to serve with an arrabbiata sauce. In Sicily, while spaghetti still holds a firm grip on households across the island, busiate is another favorite among locals. You'll find it folded into a freshly made pesto alla trapanese all across Sicily."}</>;
const question3 = <>{"What are the most popular pasta shapes?"}</>;
const answer3 = <>{"In addition to the shapes mentioned above tagliatelle and fusilli are eaten across Italy with great enthusiasm. Contrary to American belief, most pasta consumed in Italy is in fact dried, not freshly made at home. Why? The same reason they're eaten with such gusto in America: they're a means to quick and delicious meals. As such, shapes like tortellini and ravioli, which are still greatly popular, are eaten with less frequency as they require more time to make."}</>;

export default function Post() {
  return (
    <Conteiner className={styles.post}>
      <PostTitle 
        blogLink={"Back to Posts"}
        title={"Your Pasta Questions, Answered"}
        text={previewText}
        imgAlt={"Pasta"} 
      />
      <PostText 
        question={question1} 
        answer={answer1} 
      />
      <PostText 
        question={question2} 
        answer={answer2} 
      />
      <PostText 
        question={question3} 
        answer={answer3} 
      />
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

interface PostTextProps {
  question: string | typeof question1 | typeof question2 | typeof question3;
  answer: string | typeof answer1 | typeof answer2 | typeof answer3;
}
function PostText({ question, answer }: PostTextProps) {
  return (
    <TextWrapper>
      <h2 className={styles.question}>{question}</h2>
      <p className={styles.answer}>{answer}</p>
    </TextWrapper>
  );
}
