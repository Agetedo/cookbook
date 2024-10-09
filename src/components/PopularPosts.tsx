import Conteiner from "./Conteiner";
import { Link } from "react-router-dom";
import { blogPosts } from "../dB/blogPosts.ts";
import styles from "../styles/PopularPosts.module.scss";

export default function PopularPosts() {
  return (
    <Conteiner className={styles.popularPosts}>
      <PopularPostsTitle 
        title={"Popular blog posts"} 
      />
      <PostsList />
    </Conteiner>
  );
}

function PopularPostsTitle({ title }: { title:string }){
  return(
    <h2 className={styles.popularTitle}>{title}</h2>
  );
}

function PostsList(){
  const popularPostList = blogPosts.map( post =>
    <div key={post.id} className={styles.postContent}>
      <img src={post.imageSrc} alt={post.imageAlt} className={styles.postImage} />
      <section>
        <span className={styles.postTime}>{post.mealTime}</span>
        <Link to={post.linkTo}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postPreview}>{post.text}</p>
        </Link>
        <Link to={post.linkTo} className={styles.postLink}>
          {post.readMoreText}
          <img src={post.arrowLink} alt="#" />
        </Link>
      </section>
    </div>
  );

  return(
    <div className={styles.popularPostsList}>{popularPostList}</div>
  );
}