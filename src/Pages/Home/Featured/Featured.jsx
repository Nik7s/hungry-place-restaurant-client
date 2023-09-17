import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="bg-featuredBg bg-cover py-20">
      <SectionTitle subHeading="Check it out" heading="Featured Menu" />
      <div className="pb-12 max-w-screen-lg	mx-auto flex space-x-8">
        <img
          className="w-[500px] rounded-md"
          src={featureImg}
          alt="Featured Food"
        />
        <div>
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn outline-none">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
