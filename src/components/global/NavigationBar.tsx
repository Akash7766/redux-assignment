import { AiOutlineMenu } from "react-icons/ai";
import "../../style/nav.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header>
      <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation container mx-auto w-100 flex flex-wrap justify-between items-center relative py-8">
          <a className="logo" href="#">
            <h3 className="font-bold text-2xl">LOGO</h3>
          </a>
          <input type="checkbox" id="check" />

          <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-books">All books</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="">Log out</Link>
            </li>

            <label htmlFor="check" className="close-menu">
              X
            </label>
          </span>

          <label htmlFor="check" className="open-menu">
            <AiOutlineMenu />
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
