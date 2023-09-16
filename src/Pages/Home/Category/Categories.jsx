import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import s1 from "../../../../src/assets/slide/slide1.jpg";
import s2 from "../../../../src/assets/slide/slide2.jpg";
import s3 from "../../../../src/assets/slide/slide3.jpg";
import s4 from "../../../../src/assets/slide/slide4.jpg";

const Categories = () => {
  //AOS animation used here
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-easing="linear"
      className="pt-10 pb-20 max-w-screen-lg	mx-auto bg-white"
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={s1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={s4} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
