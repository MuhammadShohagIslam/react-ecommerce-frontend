import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import DropdownListItem from "../../UI/DropdownListItem/DropdownListItem";


const NavbarBottom = () => {
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [toggleSearch, setToggleSearch] = useState<boolean>(false);

    return (
        <div className="container grid grid-cols-3 pt-2">
            <div className="flex justify-start items-center">
                <ul className="flex justify-start items-center">
                    <li
                        className="relative lg:hidden"
                        onClick={() => setToggleMenu(!toggleMenu)}
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

                        <ul
                            className={`${
                                toggleMenu ? "" : "hidden"
                            } z-10 w-[230px] absolute top-10 -left-0  bg-primary rounded-b-lg divide-y divide-gray-100 shadow dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200`}
                        >
                            <DropdownListItem
                                link="/computer"
                                className="block py-2 px-4 text-white hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Computer
                            </DropdownListItem>
                            <DropdownListItem
                                link="/wish-list"
                                className="block py-2 px-4 text-white hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Telephone
                            </DropdownListItem>
                            <DropdownListItem
                                link="/TV"
                                className="block py-2 px-4 text-white hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                TV
                            </DropdownListItem>
                            <DropdownListItem
                                link="/accessory"
                                className="block py-2 px-4 text-white hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Accessory
                            </DropdownListItem>
                        </ul>
                    </li>

                    <li
                        onMouseEnter={() => setToggleDropdown(!toggleDropdown)}
                        onMouseLeave={() => setToggleDropdown(!toggleDropdown)}
                        className="text-white md:hidden sm:hidden border-2 border-transparent hover:border-secondary hover:bg-transparent bg-secondary hover:text-secondary transition ease-in-out delay-25 px-14 py-2 cursor-pointer text-center inline-flex items-center relative"
                    >
                        All Categories
                        <AiFillCaretDown className="ml-1 mt-1" />
                        <ul
                            className={`${
                                toggleDropdown ? "" : "hidden"
                            } z-10 w-[230px] absolute top-full -left-0  bg-white rounded-b-lg divide-y divide-gray-100 shadow dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200`}
                        >
                            <DropdownListItem
                                link="/computer"
                                className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Computer
                            </DropdownListItem>
                            <DropdownListItem
                                link="/wish-list"
                                className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Telephone
                            </DropdownListItem>
                            <DropdownListItem
                                link="/TV"
                                className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                TV
                            </DropdownListItem>
                            <DropdownListItem
                                link="/accessory"
                                className="block py-2 px-4 hover:text-secondary transition ease-in-out delay-15 font-medium dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Accessory
                            </DropdownListItem>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="sm:flex sm:justify-end">
                <form className="flex items-center  sm:mr-2">
                    <div className="relative w-full sm:hidden">
                        <input
                            type="text"
                            name="search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:secondary focus:border-secondary block w-full pl-6 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:secondary  dark:focus:border-secondary "
                            placeholder="What are you looking for?"
                            required
                        />
                        <button
                            type="submit"
                            className="inline-flex absolute top-0 right-0 items-center py-3 px-3 ml-2 text-sm font-medium text-white bg-secondary rounded-lg border-2 border-secondary focus:ring-4 focus:outline-none focus:secondary "
                        >
                            <FaSearch />
                        </button>
                    </div>
                    <button
                        onClick={() => setToggleSearch(!toggleSearch)}
                        type="button"
                        className="inline-flex lg:hidden md:hidden relative items-center py-3 px-3 ml-2 text-sm font-medium text-white bg-secondary rounded-lg border-2 border-secondary focus:ring-4 focus:outline-none focus:secondary "
                    >
                         {toggleSearch ? <ImCross/> : <FaSearch />}
                       
                    </button>
                    {toggleSearch && (
                        <div className="absolute top-[69%]">
                            <input
                                type="text"
                                name="search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:secondary focus:border-secondary block -ml-28  w-[230px] pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:secondary  dark:focus:border-secondary "
                                placeholder="What are you looking for?"
                                required
                            />
                            <button
                                type="submit"
                                className="inline-flex absolute top-0 right-0 items-center py-3 px-3 ml-2 text-sm font-medium text-white bg-secondary rounded-lg border-2 border-secondary focus:ring-4 focus:outline-none focus:secondary "
                            >
                              <FaSearch />
                            </button>
                        </div>
                    )}
                </form>
            </div>
            <div className="flex justify-end">
                <ul className="flex items-center">
                    <li className="py-3 px-3 rounded-lg border-2 border-secondary hover:bg-transparent text-white bg-secondary transition ease-in-out delay-15">
                        <FaHeart />
                    </li>
                    <li className="py-3 px-3 rounded-lg ml-2 border-2 border-secondary hover:bg-transparent  text-white bg-secondary transition ease-in-out delay-15">
                        <FaShoppingCart />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarBottom;
