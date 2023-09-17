import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((i) => i.category === "salad");
        setItems(filteredData);
      });
  }, []);

  return (
    <section>
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
      <div>
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
