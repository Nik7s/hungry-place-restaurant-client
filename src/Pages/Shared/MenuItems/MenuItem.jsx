// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
  const { name, price, recipe, image } = item || {};

  return (
    <div className="flex items-center space-x-4 justify-between ">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[118px] h-[104px]"
        src={image}
        alt="recipe image"
      />
      <div>
        <p className="text-xl font-medium">{name} ----------</p>
        <p>{recipe}</p>
      </div>
      <p>$ {price}</p>
    </div>
  );
};

export default MenuItem;
