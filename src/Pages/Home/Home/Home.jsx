import MenuItems from "../../Shared/MenuItems/MenuItems";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";

const Home = () => {
  return (
    <div className=" bg-white">
      <Banner />
      <Categories />
      <MenuItems />
    </div>
  );
};

export default Home;
