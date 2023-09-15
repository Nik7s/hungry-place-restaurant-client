import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../../src/assets/BannerImages/01.jpg";
import img2 from "../../../../src/assets/BannerImages/02.jpg";
import img3 from "../../../../src/assets/BannerImages/03.png";
import img4 from "../../../../src/assets/BannerImages/04.jpg";
import img5 from "../../../../src/assets/BannerImages/05.png";
import img6 from "../../../../src/assets/BannerImages/06.png";

const Banner = () => {
  return (
    <Carousel showStatus={false}>
      <div>
        <img src={img1} alt="slide 1" />
      </div>
      <div>
        <img src={img2} alt="slide 2" />
      </div>
      <div>
        <img src={img3} alt="slide 3" />
      </div>
      <div>
        <img src={img4} alt="slide 4" />
      </div>
      <div>
        <img src={img5} alt="slide 5" />
      </div>
      <div>
        <img src={img6} alt="slide 6" />
      </div>
    </Carousel>
  );
};

export default Banner;
