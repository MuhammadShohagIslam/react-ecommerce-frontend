import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";

const NavbarMiddle = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <nav className="container w-full z-20 grid grid-cols-6 md:grid-cols-2 sm:grid-cols-2">
            <div className="py-4">
                <Link
                    to="/"
                    className="text-secondary italic font-bold text-4xl  cursor-pointer"
                >
                    Aladin
                </Link>
            </div>
            <div className="flex justify-end order-2 ">
                <ul className="flex md:hidden sm:hidden">
                    <li className="text-white cursor-pointer my-5">
                        <AiFillLock />
                    </li>
                    <li className="text-white font-normal text-base hover:text-secondary transition ease-in-out delay-15  cursor-pointer py-4 pr-1">
                        <Link to="/login">Login</Link>{" "}
                    </li>
                    <li className="text-white py-4">or</li>
                    <li className="text-white font-normal text-base hover:text-secondary transition ease-in-out delay-15  cursor-pointer py-4 pl-1">
                        <Link to="/register">Register</Link>
                    </li>
                </ul>

                <button
                    type="button"
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="inline-flex relative my-4 items-center w-12 h-12 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:border-1 focus:outline-none focus:ring-2 focus:border-1"
                >
                    <svg
                        className="w-8 h-8 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
            <ul className="flex col-start-2 col-span-4 justify-center md:hidden sm:hidden">
                <li className="text-white font-semibold text-xl p-4 hover:text-secondary transition ease-in-out delay-15">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-white font-semibold text-xl p-4 hover:text-secondary transition ease-in-out delay-15">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="text-white font-semibold text-xl p-4 hover:text-secondary transition ease-in-out delay-15">
                    <Link to="/">New Products</Link>
                </li>
                <li className="text-white font-semibold text-xl p-4 hover:text-secondary transition ease-in-out delay-15">
                    <Link to="/shop">Shop</Link>
                </li>
                <li className="text-white font-semibold text-xl p-4 hover:text-secondary transition ease-in-out delay-15">
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
            {toggleMenu && (
                <ul className="w-[92%] z-40 top-[38%] flex absolute flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100  dark:bg-gray-800 ">
                    <li>
                        <Link
                            to="#"
                            className="block py-2 pr-4 pl-3 text-gray-700 rounded"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="block py-2 pr-4 pl-3 text-gray-700 rounded"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="block py-2 pr-4 pl-3 text-gray-700 rounded"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="block py-2 pr-4 pl-3 text-gray-700 rounded"
                        >
                            Services
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavbarMiddle;
