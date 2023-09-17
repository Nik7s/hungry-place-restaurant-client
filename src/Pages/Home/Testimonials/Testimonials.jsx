import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mt-16 pb-10">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      />
    </div>
  );
};

export default Testimonials;
