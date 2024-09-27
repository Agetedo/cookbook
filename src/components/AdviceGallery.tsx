import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay, } from "swiper/modules";
import { advices } from "../dB/advices";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
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
      <h2 className="title">{slide.title}</h2>
      <p className="advice__text">{slide.adviceText}</p>
    </SwiperSlide>
  );
  
  return (
    <Swiper
      modules={[EffectFade, Pagination, Navigation, Autoplay]} 
      className="advices"
      effect={"fade"}
      /*autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}*/
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      {slideList}
    </Swiper>
  );
}