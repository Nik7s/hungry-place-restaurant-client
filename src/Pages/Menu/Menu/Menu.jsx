import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <div className="h-screen">
      <Helmet>
        <title>Hungry Place | Our Menu</title>
      </Helmet>
      <h1>This is Menu Component</h1>
    </div>
  );
};

export default Menu;
