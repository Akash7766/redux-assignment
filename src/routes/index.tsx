import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/404";
import AboutPage from "../pages/about";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddNewBook from "../components/AddNewBook";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-books", element: <AllBooks /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/add-new-book", element: <AddNewBook /> },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "*", element: <NotFound /> },
]);

export default Routes;
