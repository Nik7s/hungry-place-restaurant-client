import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="h-screen bg-white text-black">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
