import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="h-screen bg-white text-black">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
