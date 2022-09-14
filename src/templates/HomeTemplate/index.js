import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";

function HomeTemplate() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeTemplate;
