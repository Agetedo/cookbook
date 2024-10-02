import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, } from "swiper/modules";
import { advices } from "../dB/advices";
import "swiper/scss";
import "swiper/scss/pagination";
import "../styles/AdviceGallery.scss";

export default function AdviceGallery({ description }: { description: string }) {
  const descriptionFiltered = advices.filter( slide =>
    slide.description === description
  );

  const slideList = descriptionFiltered.map( slide =>
    <SwiperSlide key={slide.id} className="advice__slide" 
      style={
        {"backgroundImage": `url(${slide.bgImage})`,}
      }
    >
      <section className="advice__items">
        <h2 className="title">{slide.title}</h2>
        <p className="advice__text">{slide.adviceText}</p>
      </section>
    </SwiperSlide>
  );
  
  return (
    <Swiper
      modules={[Pagination, Autoplay]} 
      className="advices"
      /*autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}*/
      loop={true}
      pagination={{
        clickable: true,
      }}
    >
      {slideList}
    </Swiper>
  );
}