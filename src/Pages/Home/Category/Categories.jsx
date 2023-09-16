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
          <div className="relative ">
            <img src={s1} alt="slide" />
            <h2 className="uppercase absolute bottom-[30px] left-[35%] text-3xl  text-center  -ms-6 text-white shadow-xl">
              Salad
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={s2} alt="slide" />
            <h2 className="uppercase absolute bottom-[30px] left-[35%] text-3xl  text-center  -ms-6 text-white shadow-xl">
              Pizzas
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={s3} alt="slide" />
            <h2 className="uppercase absolute bottom-[30px] left-[35%] text-3xl  text-center  -ms-6 text-white shadow-xl">
              Soups
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={s4} alt="slide" />
            <h2 className="uppercase absolute bottom-[30px] left-[35%] text-3xl  text-center  -ms-6 text-white shadow-xl">
              Desserts
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
