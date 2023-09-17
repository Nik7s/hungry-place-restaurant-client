import MenuItems from "../../Shared/MenuItems/MenuItems";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div className=" bg-white">
      <Banner />
      <Categories />
      <MenuItems />
      <Featured />
    </div>
  );
};

export default Home;
