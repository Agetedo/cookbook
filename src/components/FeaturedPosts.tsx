import Conteiner from "./Conteiner";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import mainPostImage01 from "/main-post-image01.jpg";
import mainPostImage02 from "/main-post-image02.jpg";
import mainPostImage03 from "/main-post-image03.jpg";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import arrowLink from "/pepicons-arrow.png";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "../styles/FeaturedPosts.scss";
const pastaText = <>{"Whether it's the brand, the shape, or the ingredients that help you choose what pasta to keep in your pantry, we want to help answer some commonly raised questions about pasta specifically, as well as the broader, oh-so-wonderful-world of pasta at large..."}</>;

export default function FeaturedPosts() {
  return (
    <Conteiner className={"featured-posts"}>
      <FeaturedPostsTitle 
        title={"Featured blog posts"} 
      />
      <div className="posts__items">
        <MainPost 
          mealTime={"Lunch 🍽 Dinner"} 
          title={"Your pasta questions, answered"} 
          text={pastaText} 
          readMoreLink={"Read more"}          
        />
        <S />
      </div>
      
    </Conteiner>
  );
}

function FeaturedPostsTitle({ title }: { title:string }){
  return(
    <h2 className="featured__title">{title}</h2>
  );
}

interface MainPostProps {
  mealTime: string;
  title: string;
  text: string | typeof pastaText;
  readMoreLink: string;
}
function MainPost({ mealTime, title, text, readMoreLink }: MainPostProps){
  return(
    <div className="main-post">
      <Swiper
        modules={[EffectFade, Autoplay]}
        id="mainPostGallery"
        effect={"fade"}
        /*autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}*/
        loop={true}
      >
        <SwiperSlide><img src={mainPostImage01} alt={"Pasta recipe"} /></SwiperSlide>
        <SwiperSlide><img src={mainPostImage02} alt={"Pasta recipe"} /></SwiperSlide>
        <SwiperSlide><img src={mainPostImage03} alt={"Pasta recipe"} /></SwiperSlide>
      </Swiper>

      <span className="meal-time">{mealTime}</span>
      <h3 className="main-post__title">{title}</h3>
      <p className="main-post__text">{text}</p>
      <Link to={PathConstants.STARTPAGE} className="main-post__link">
        {readMoreLink}
        <img src={arrowLink} alt="#" />
      </Link>
    </div>
  );
}
function S(){
  return(
    <div className="s-post">SIDE POSTS</div>
  );
}