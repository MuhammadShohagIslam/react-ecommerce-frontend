import React from "react";
import { Link } from "react-router-dom";

const NavbarMiddle: React.FC = (): JSX.Element => {
    const menuListItem = () => {
        return (
            <>
                <li>
                    <Link
                        className="hover:bg-transparent hover:text-success text-lg"
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:bg-transparent hover:text-success text-lg"
                        to="/about"
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:bg-transparent hover:text-success text-lg"
                        to="/"
                    >
                        New Products
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:bg-transparent hover:text-success text-lg"
                        to="/shop"
                    >
                        Shop
                    </Link>
                </li>
                <li>
                    <Link
                        className="hover:bg-transparent hover:text-success text-lg"
                        to="/contact"
                    >
                        Contact Us
                    </Link>
                </li>
            </>
        );
    };
    return (
        <div className="navbar container">
            <div className="navbar-start md:w-full md:justify-between sm:w-full sm:justify-between">
                <Link
                    to="/"
                    className="text-secondary italic font-bold text-4xl  cursor-pointer"
                >
                    Aladin
                </Link>
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
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[692px] sm:w-[17.5rem] right-0 "
                    >
                        {menuListItem()}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuListItem()}</ul>
            </div>
            <div className="navbar-end md:hidden sm:hidden">
                <ul className="menu flex flex-row">
                    <li>
                        <Link
                            className="hover:bg-transparent hover:text-success text-lg"
                            to="/login"
                        >
                            Login
                        </Link>{" "}
                    </li>
                    <li className="text-primary hover:bg-transparent flex items-center justify-center">
                        or
                    </li>
                    <li>
                        <Link
                            className="hover:bg-transparent hover:text-success text-lg"
                            to="/register"
                        >
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarMiddle;
