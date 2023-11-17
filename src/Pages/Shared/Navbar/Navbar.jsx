import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navLinks =
        <>
            <li className="lg:text-white "><NavLink to="/">Home</NavLink></li>
            <li className="lg:text-white"><NavLink to="/addProduct">CONTACT US</NavLink></li>
            <li className="lg:text-white"><NavLink to="/cart">DASHBOARD</NavLink></li>
            <li className="lg:text-white"><NavLink to="/menu">Our Menu</NavLink></li>
            <li className="lg:text-white"><NavLink to="/order/salad">Order Food</NavLink></li>
            <li> <Link to='/dashboard/cart'>
                <button className="btn">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link> </li>

            {
                user ? <>
                    <button onClick={handleLogOut} className="btn btn-ghost text-white">LogOut</button>
                </> :
                    <>
                        <li className="lg:text-white"><NavLink to="/login">Login</NavLink></li>
                    </>
            }

        </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-[#15151580]  max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className=" text-white normal-case text-xl">BISTRO BOSS <br /> Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;