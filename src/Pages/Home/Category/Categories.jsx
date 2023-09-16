import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import s1 from "../../../../src/assets/slide/slide1.jpg";
import s2 from "../../../../src/assets/slide/slide2.jpg";
import s3 from "../../../../src/assets/slide/slide3.jpg";
import s4 from "../../../../src/assets/slide/slide4.jpg";
import s5 from "../../../../src/assets/slide/slide5.jpg";
const Categories = () => {
  return (
    <div className="py-20 bg-white">
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
        <SwiperSlide>
          <img src={s5} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
