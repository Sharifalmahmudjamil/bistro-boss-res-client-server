import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import logo from "../../../assets/logo/flavour-Heaven2-removebg-preview.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li className="lg:text-white ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="lg:text-white">
        <NavLink to="/contact">CONTACT US</NavLink>
      </li>
      <li className="lg:text-white">
        <NavLink to="/dashboard">DASHBOARD</NavLink>
      </li>
      <li className="lg:text-white">
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li className="lg:text-white">
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      <li>
        {" "}
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>{" "}
      </li>

      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost text-white">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li className="lg:text-white">
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-[#15151580]  max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img src={logo} className="w-20 h-20" alt="" />
          {/* <a className=" text-white normal-case text-xl">
            BISTRO BOSS <br /> Restaurant
          </a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className=" m-1">
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span>{user?.email}</span>
              </li>

              <li>
                <img
                  className="w-20 h-20 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </li>
              <li>
                <span className="text-rose-500">{user?.displayName}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
