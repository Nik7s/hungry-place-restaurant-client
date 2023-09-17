import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

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
    <div>
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
    </div>
  );
};

export default MenuItems;
