import { Link, Outlet } from "react-router-dom";
import "../navigation/navigation.style.css";
const NavBar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to={'/about'} href="#">About</Link>
          </li>
          <li>
            <Link to={'/sign-in'} href="#">Sign In</Link>
          </li>
          <li>
            <Link to={'/sign-up'} href="#">Sign Up</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
