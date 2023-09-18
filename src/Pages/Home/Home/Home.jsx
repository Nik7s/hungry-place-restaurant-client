import { Helmet } from "react-helmet-async";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className=" bg-white">
      <Helmet>
        <title>Hungry Place | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      <MenuItems />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
