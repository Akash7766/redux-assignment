import { Outlet } from "react-router-dom";
import NavigationBar from "../components/global/NavigationBar";

const Layout = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
