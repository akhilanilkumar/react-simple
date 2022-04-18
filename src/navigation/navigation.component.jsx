import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/user.context";
import "../navigation/navigation.style.css";
import { signOutUser } from "../util/firebase.utils";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

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
            <Link to={"/about"} href="#">
              About
            </Link>
          </li>
          {currentUser ? (
            <li>
              <span onClick={signOutUser}>Sign Out</span>
            </li>
          ) : (
            <>
              <li>
                <Link to={"/sign-in"} href="#">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to={"/sign-up"} href="#">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
